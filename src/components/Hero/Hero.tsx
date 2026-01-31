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
        <section ref={containerRef} className="relative w-full bg-black">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            {/* Main Sticky Container */}
            <div className="hero-container relative w-full h-[350vh]">
                {/* Scene 1: Introduction */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
                    <div className="hero-text-wrapper text-center z-10 max-w-5xl">
                        <h1 className="hero-title text-[clamp(3rem,12vw,9rem)] font-black tracking-tight mb-8 opacity-0 translate-y-20 leading-[0.85] text-white">
                            CRAFTING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-300% animate-gradient">DIGITAL</span><br />
                            LEGACIES
                        </h1>
                        <p className="hero-subtitle text-lg md:text-xl text-gray-400 font-medium max-w-xl mx-auto opacity-0 translate-y-10 leading-relaxed">
                            Full-stack engineer specializing in the intersection of 
                            scalability and immersive design.
                        </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator absolute bottom-12 flex flex-col items-center gap-3 opacity-0">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Scroll to Reveal</span>
                        <div className="relative w-[1px] h-12 bg-white/10 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-violet-500 to-transparent animate-scroll-line" />
                        </div>
                    </div>

                    {/* Project Reveal Images */}
                    <div className="project-preview-container absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                            <img 
                                src="/huddle-img.png" 
                                alt="Huddle Social Platform" 
                                className="project-preview project-1 absolute w-[90%] md:w-[75%] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] opacity-0 scale-50 rotate-3 border border-white/10"
                            />
                            <img 
                                src="/iNotes-img.png" 
                                alt="iNotes Cloud App" 
                                className="project-preview project-2 absolute w-[90%] md:w-[75%] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] opacity-0 scale-50 -rotate-2 border border-white/10"
                            />
                            <img 
                                src="/QuickShare-img.png" 
                                alt="QuickShare Platform" 
                                className="project-preview project-3 absolute w-[90%] md:w-[75%] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] opacity-0 scale-50 rotate-1 border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Transition to next section - Bio/About */}
            <div className="bio-section relative min-h-screen flex items-center justify-center px-6 py-40 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center z-10">
                    <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-violet-500 mb-8">Introduction</h2>
                    <h3 className="text-4xl md:text-7xl font-bold mb-10 tracking-tight text-white">Full-stack agility. Focused design.</h3>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-16 font-medium">
                        I build performant web applications using the MERN stack and Next.js. 
                        My goal is to bridge the gap between complex backend systems and 
                        delightful user interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a 
                            href="/Ritik_Gupta_Resume_2025.pdf" 
                            target="_blank"
                            className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-violet-600 hover:text-white transition-all duration-500 transform hover:scale-105"
                        >
                            View Resume
                        </a>
                        <a 
                            href="#projects"
                            className="px-10 py-5 border border-white/10 font-bold rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 text-white"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
