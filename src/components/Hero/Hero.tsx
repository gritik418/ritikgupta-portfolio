import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import heroAnimations from "../../animations/heroAnimations";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bioTextRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        heroAnimations();
        
        // Additional Reveal for Bio Section
        if (bioTextRef.current) {
            gsap.from(bioTextRef.current, {
                opacity: 0,
                y: 30,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".bio-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-transparent">
            {/* Multi-layered Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-violet-900/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
            </div>

            {/* Main Sticky Container */}
            <div className="hero-container relative w-full h-[250vh]">
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 py-20">
                    <div className="hero-text-wrapper text-center z-10 max-w-5xl flex flex-col items-center justify-center h-full pb-32">
                        <h1 className="hero-title text-[clamp(2.5rem,14vw,10rem)] font-black tracking-tighter mb-8 opacity-0 translate-y-20 leading-[0.8] text-white">
                            CRAFTING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-300% animate-gradient">DIGITAL</span><br />
                            LEGACIES
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-gray-400 font-medium max-w-xl mx-auto opacity-0 translate-y-10 leading-relaxed">
                            Full-stack engineer specializing in the intersection of 
                            scalability and immersive design. Focus on performance & craft.
                        </p>
                    </div>

                    {/* Fancy Scroll Indicator */}
                    <div className="scroll-indicator absolute bottom-10 md:bottom-16 flex flex-col items-center gap-4 opacity-0 z-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Discover</span>
                        <div className="relative w-[2px] h-12 bg-white/5 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-violet-500 to-transparent animate-scroll-line" />
                        </div>
                    </div>

                    {/* Project Reveal Images */}
                    <div className="project-preview-container absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                            <div className="project-preview project-1 absolute w-[90%] md:w-[75%] aspect-video rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] opacity-0 scale-50 rotate-3 border border-white/10">
                                <img src="/huddle-img.png" className="w-full h-full object-cover" alt="Project" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="project-preview project-2 absolute w-[90%] md:w-[75%] aspect-video rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] opacity-0 scale-50 -rotate-2 border border-white/10">
                                <img src="/iNotes-img.png" className="w-full h-full object-cover" alt="Project" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="project-preview project-3 absolute w-[90%] md:w-[75%] aspect-video rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] opacity-0 scale-50 rotate-1 border border-white/10">
                                <img src="/QuickShare-img.png" className="w-full h-full object-cover" alt="Project" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio Section */}
            <div className="bio-section !px-2 relative md:min-h-screen flex items-center justify-center sm:!px-6 !py-24 md:!py-40 border-t border-white/5 bg-black z-10">
                <div className="max-w-4xl mx-auto text-center z-10">
                    <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-violet-500 mb-8 md:mb-10">Agility Meets Craft</h2>
                    <h3 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight text-white leading-tight">
                        I build solutions that <br className="hidden md:block" />
                        <span className="italic font-serif text-violet-400">resonate</span> and scale.
                    </h3>
                    <p ref={bioTextRef} className="text-lg md:text-3xl text-gray-400 leading-relaxed mb-10 md:mb-16 font-light">
                        Specializing in the modern web stack, I bridge the gap between complex 
                        system architecture and delightful user interfaces. Every line of code 
                        is written with purpose and performance in mind.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center !mt-8 items-center gap-8">
                        <a 
                            href="/Ritik_Gupta_Resume_2025.pdf" 
                            target="_blank"
                            className="group relative !px-12 !py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 uppercase tracking-widest text-xs">View Resume</span>
                            <div className="absolute inset-0 bg-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a 
                            href="#projects"
                            className="group flex items-center gap-3 text-white font-bold tracking-widest text-[10px] uppercase hover:text-violet-400 transition-colors"
                        >
                            EXPLORE PROJECTS
                            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
