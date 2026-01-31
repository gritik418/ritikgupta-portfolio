import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";

const GithubSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".github-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
        .from(buttonRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
        }, "-=0.5");

        // Floating animation for background elements
        gsap.to(".floating-shape", {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            rotation: "random(-15, 15)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.1
        });

    }, { scope: containerRef });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;
        
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(buttonRef.current, {
            x: x * 0.2, // Magnetic intensity
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <section 
            ref={containerRef} 
            className="relative w-full !px-2 sm:!px-0 !py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            
            {/* Glowing Orbs */}
            <div className="floating-shape absolute top-1/4 left-1/4 w-32 h-32 bg-violet-600/20 rounded-full blur-[80px]" />
            <div className="floating-shape absolute bottom-1/4 right-1/4 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-[80px]" />

            <div className="z-10 text-center !px-4 relative">
                <h2 className="github-title text-4xl md:text-7xl font-black text-white !mb-8 tracking-tighter leading-tight">
                    Code that lives on <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">GitHub.</span>
                </h2>
                
                <p className="github-title text-gray-400 text-lg md:text-xl max-w-2xl mx-auto !mb-16">
                    Explore my repositories, contributions, and the open-source projects I've been working on.
                </p>

                <div className="relative group perspective-1000">
                    <a
                        ref={buttonRef}
                        href="https://github.com/gritik418" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center gap-4 !px-8 !py-4 bg-white text-black rounded-full font-bold text-lg md:text-xl tracking-wider hover:bg-violet-50 transition-colors duration-300"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <FaGithub className={`!text-4xl transition-transform duration-500 ${isHovered ? 'rotate-[360deg]' : ''}`} />
                        <span className="relative z-10">VISIT GITHUB</span>
                        
                        {/* Button Glow Effect */}
                        <div className={`absolute inset-0 rounded-full bg-violet-500 blur-xl opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-40' : ''}`} />
                    </a>
                </div>
            </div>

            {/* Matrix-like falling characters (Simplified CSS version or canvas can be added here, keeping it clean for now) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </section>
    );
};

export default GithubSection;
