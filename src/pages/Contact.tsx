import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useGSAP(() => {
    // Header Animation
    gsap.from(".contact-header", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Info Cards Animation
    gsap.from(".contact-info-item", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      ease: "power3.out",
      clearProps: "all"
    });

    // Form Animation
    gsap.from(".contact-form-container", {
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });

    // Create static stars background
    if (containerRef.current) {
        const starsContainer = containerRef.current;
        const starCount = 150;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "absolute rounded-full bg-white pointer-events-none";
            
            // Random size (1-4px)
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random opacity for twinkling effect
            const baseOpacity = Math.random() * 0.6 + 0.3;
            star.style.opacity = `${baseOpacity}`;
            
            // Add slight glow to make them more visible
            star.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, ${baseOpacity * 0.5})`;
            
            starsContainer.appendChild(star);
            
            gsap.to(star, {
                opacity: Math.random() * 0.2 + 0.1, // Lower opacity for more dramatic blink
                duration: Math.random() * 1.5 + 0.5, // Faster blinking (0.5-2s)
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }

    // Shooting Stars Animation (Top-Right to Bottom-Left)
    const createShootingStar = () => {
        if (!containerRef.current) return;
        
        // Start position - top right area
        const startX = Math.random() * 20 + 80; // 80-100% from left (top right)
        const startY = -10; // Above viewport
        
        // End position - bottom left
        const horizontalDistance = Math.random() * 40 + 40; // 40-80% leftward movement
        const endX = startX - horizontalDistance;
        const endY = Math.random() * 30 + 80; // 80-110% (bottom of screen)
        
        // Create trail effect (the shooting star streak)
        const trail = document.createElement("div");
        trail.className = "absolute w-10 h-[1px] bg-gradient-to-r from-transparent to-white/80 pointer-events-none";
        trail.style.left = `${startX}%`;
        trail.style.top = `${startY}%`;
        
        // Calculate angle based on trajectory
        const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
        trail.style.transform = `rotate(${angle}deg)`;
        trail.style.boxShadow = "0 0 4px rgba(255, 255, 255, 0.6)";
        
        containerRef.current.appendChild(trail);
        
        gsap.to(trail, {
            left: `${endX}%`,
            top: `${endY}%`,
            opacity: 0,
            duration: Math.random() * 1.5 + 1.5,
            ease: "power1.in",
            onComplete: () => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }
        });
    };

    // Create shooting stars at intervals
    const shootingStarInterval = setInterval(() => {
        createShootingStar();
    }, 1200);

    return () => {
        clearInterval(shootingStarInterval);
    };

  }, { scope: containerRef });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send message. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "gritik418@gmail.com",
      link: "mailto:gritik418@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-400/10 border-blue-400/20"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "@gritik418",
      link: "https://github.com/gritik418",
      color: "text-gray-200",
      bg: "bg-gray-200/10 border-gray-200/20"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Ritik Gupta",
      link: "https://www.linkedin.com/in/ritik-gupta-849680251/",
      color: "text-blue-600",
      bg: "bg-blue-600/10 border-blue-600/20"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India (IST)",
      link: null,
      color: "text-red-400",
      bg: "bg-red-400/10 border-red-400/20"
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-black flex flex-col items-center text-white !pt-32 !pb-20 relative overflow-hidden justify-center">

      <div className="max-w-7xl mx-auto !px-6 w-full grid grid-cols-1 lg:grid-cols-2 !gap-16 lg:!gap-24 items-center">
        
        {/* Left Column: Info */}
        <div className="!space-y-12">
            <div className="contact-header !space-y-6">
                <h4 className="text-violet-500 font-bold tracking-[0.2em] uppercase text-sm">Contact Me</h4>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Let's work <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">together.</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                    Have a project in mind? Looking to hire? Or just want to discuss the latest tech? I'm just a message away.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 !gap-6">
                {contactDetails.map((item, index) => (
                    <a 
                        key={index}
                        href={item.link || "#"}
                        target={item.link ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`contact-info-item !p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 block group ${item.bg}`}
                    >
                        <div className={`text-3xl !mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center rounded-lg bg-black/20 text-center`}>
                            {item.icon}
                        </div>
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider font-bold !mb-1">{item.title}</h3>
                        <p className="text-white font-medium text-lg">{item.value}</p>
                    </a>
                ))}
            </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-container">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl !p-8 md:!p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h2 className="text-2xl font-bold !mb-8 flex items-center !gap-3">
                    <FaEnvelope className="text-violet-500" />
                    Send a Message
                </h2>
                
                <form ref={form} onSubmit={sendEmail} className="!space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 !gap-6">
                        <div className="!space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400 !ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-black/40 border border-white/10 rounded-xl !px-5 !py-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <div className="!space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400 !ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full bg-black/40 border border-white/10 rounded-xl !px-5 !py-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                                required
                            />
                        </div>
                    </div>

                    <div className="!space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-400 !ml-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="Tell me about your project..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl !px-5 !py-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-violet-600 text-white font-bold !py-4 rounded-xl hover:bg-violet-500 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <FaEnvelope className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-sm" />
                            </>
                        )}
                    </button>
                    
                </form>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
