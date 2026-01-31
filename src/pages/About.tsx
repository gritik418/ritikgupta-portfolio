import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMobileAlt, FaRocket, FaLayerGroup, FaTools } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "developing scalable applications.",
        "crafting beautiful user interfaces.",
        "solving complex problems.",
        "optimizing performance.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useGSAP(() => {
    // Header Animation
    gsap.from(".about-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Sections Animation
    const sections = gsap.utils.toArray(".about-section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Tech Categories Animation
    gsap.from(".tech-category", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".tech-grid",
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  const philosophies = [
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: "Clean Architecture",
      desc: "Maintainable, scalable codebases are my priority. I build systems that grow with the business."
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Performance First",
      desc: "Speed is a feature. I optimize every byte and render cycle for the smoothest user experience."
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Responsive Design",
      desc: "Experiences that feel native on any device. Pixel-perfect implementation from Figma to code."
    }
  ];

  const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Redux", "Framer Motion"],
    Backend: ["Node.js", "Express", "NestJS","Python","Django","MySQL", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
    Tools: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD", "Vercel"]
  };

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center bg-black text-white !pt-32 !pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto !px-6">
        {/* Header Section */}
        <div className="about-header !mb-24 max-w-4xl">
            <h4 className="text-violet-500 font-bold tracking-[0.2em] uppercase !mb-4 text-sm">About Me</h4>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-tight !mb-8">
                I'm passionate about <br/>
                <span className="text-violet-400" ref={el}></span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                I bridge the gap between design and engineering, creating products that look beautiful and perform flawlessly.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 !gap-12 lg:!gap-20">
            {/* Main Content - Left Col */}
            <div className="lg:col-span-7 !space-y-20">
                {/* Story Section */}
                <div className="about-section">
                    <h2 className="text-3xl font-bold !mb-8 flex items-center !gap-3">
                        <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
                        The Journey
                    </h2>
                    <div className="!space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            My fascination with technology began with a simple curiosity: "How does this work?" That curiosity quickly evolved into a passion for building. From my first "Hello World" to deploying complex, scalable applications, every step has been driven by a desire to create something meaningful.
                        </p>
                        <p>
                            I've had the privilege of working on diverse projects, from social platforms like <span className="text-white font-medium border-b border-violet-500/30">Huddle</span> to robust eCommerce solutions like <span className="text-white font-medium border-b border-violet-500/30">Trove</span>. Each project is a new puzzle, a new opportunity to learn and refine my craft.
                        </p>
                    </div>
                </div>

                {/* Philosophy Grid */}
                <div className="about-section">
                    <h2 className="text-3xl font-bold !mb-8 flex items-center !gap-3">
                        <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
                        Core Philosophy
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 !gap-6">
                        {philosophies.map((item, idx) => (
                            <div key={idx} className="!p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
                                <div className="text-violet-400 !mb-4 group-hover:scale-110 transition-transform duration-300 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold !mb-2 group-hover:text-violet-300 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar - Right Col */}
            <div className="lg:col-span-5 !space-y-12">
                {/* Tech Stack */}
                <div className="about-section bg-white/[0.02] border border-white/5 rounded-3xl !p-8 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold !mb-8 flex items-center !gap-3">
                        <FaTools className="text-violet-500" />
                        Technical Arsenal
                    </h2>
                    <div className="!space-y-8 tech-grid">
                        {Object.entries(techStack).map(([category, techs]) => (
                            <div key={category} className="tech-category">
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold !mb-4">{category}</h3>
                                <div className="flex flex-wrap !gap-2">
                                    {techs.map((tech) => (
                                        <span key={tech} className="!px-3 !py-1.5 bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/30 rounded-lg text-sm text-gray-300 transition-all duration-300 cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Connect CTA */}
                <div className="about-section bg-gradient-to-br from-violet-900/20 to-black border border-violet-500/20 rounded-3xl !p-8 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-violet-600/10 blur-[50px] group-hover:bg-violet-600/20 transition-all duration-500" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold !mb-4">Let's Build Together</h3>
                        <p className="text-gray-400 !mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <a 
                            href="mailto:gritik418@gmail.com" 
                            className="inline-flex items-center !gap-2 bg-white text-black !px-8 !py-3 rounded-full font-bold hover:bg-violet-200 transition-colors"
                        >
                            Start a Conversation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
