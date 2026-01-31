import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroAnimations from "../../animations/heroAnimations";
import { useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        heroAnimations();
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full">
            {/* Main Sticky Container */}
            <div className="hero-container relative w-full h-[400vh]">
                {/* Scene 1: Introduction */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
                    <div className="hero-text-wrapper text-center z-10">
                        <h1 className="hero-title text-6xl md:text-8xl font-black tracking-tighter mb-4 opacity-0">
                            CRAFTING <span className="text-violet-500">DIGITAL</span><br />
                            EXPERIENCES
                        </h1>
                        <p className="hero-subtitle text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto opacity-0">
                            Full-stack developer focused on building high-performance 
                            applications with stunning user interfaces.
                        </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator absolute bottom-10 flex flex-col items-center gap-2 opacity-0">
                        <span className="text-sm font-light text-gray-500">Scroll to explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent"></div>
                    </div>

                    {/* Project Reveal Images (Hidden initially, reveal as sticky) */}
                    <div className="project-preview-container absolute inset-0 pointer-events-none">
                        <img 
                            src="/huddle-img.png" 
                            alt="Project 1" 
                            className="project-preview project-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] rounded-2xl shadow-2xl opacity-0 scale-50 rotate-6"
                        />
                        <img 
                            src="/iNotes-img.png" 
                            alt="Project 2" 
                            className="project-preview project-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] rounded-2xl shadow-2xl opacity-0 scale-50 -rotate-3"
                        />
                        <img 
                            src="/QuickShare-img.png" 
                            alt="Project 3" 
                            className="project-preview project-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] rounded-2xl shadow-2xl opacity-0 scale-50 rotate-2"
                        />
                    </div>
                </div>
            </div>

            {/* Transition to next section - Bio/About */}
            <div className="bio-section min-h-screen flex items-center justify-center px-6 py-20 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Hi, I'm Ritik Gupta</h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10">
                        I'm a Full-Stack Developer based in India, specializing in building
                        clean, scalable, and user-centric web applications.
                        With a deep passion for UI/UX and performance, I turn complex
                        requirements into seamless digital products.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="/Ritik_Gupta_Resume_2025.pdf" 
                            target="_blank"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            View Resume
                        </a>
                        <a 
                            href="#contact"
                            className="px-8 py-4 border border-white/20 font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
