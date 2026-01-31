import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Whatbytes",
    role: "Frontend Developer Intern",
    period: "July 2025 – Present",
    description: "Developed and shipped responsive frontend features, improving web performance by 25%. Collaborated with backend engineers to integrate REST APIs, ensuring seamless data flow. Optimized cross-browser compatibility increasing user engagement by 15%, and contributed to a LinkedIn automation extension.",
    tech: ["React", "REST API", "Web Performance", "Browser Extensions"]
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2024 - Present",
    description: "Developing scalable web applications and digital solutions for diverse clients using the MERN stack and Next.js. Architecting database structures and creating responsive, meaningful user experiences.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "GSAP"]
  },
  {
    company: "Open Source",
    role: "Contributor",
    period: "2023 - Present",
    description: "Actively contributing to open-source projects, focusing on developer tools and UI libraries. enhancing code quality through rigorous testing and documentation.",
    tech: ["TypeScript", "React", "GitHub Actions"]
  }
];

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLElement>('.experience-item');
        
        items.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Timeline line animation
        gsap.from(".timeline-line", {
            scaleY: 0,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
                trigger: ".experience-list",
                start: "top 70%",
                end: "bottom 70%",
                scrub: 1
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="experience" className="relative w-full flex flex-col items-center justify-center py-32 bg-black text-white !px-6">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row !gap-16 md:!gap-24">
                
                {/* Header / Sidebar */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-violet-500 !mb-6">Career Path</h2>
                    <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight !mb-8">
                        Experience & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Professional Journey.</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                        A timeline of my professional growth and technical milestones.
                    </p>
                    
                    <a 
                        href="/Ritik_Gupta_Resume_2025.pdf" 
                        target="_blank"
                        className="!mt-12 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-violet-400 transition-colors group"
                    >
                        <span>Download Full Resume</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Experience List */}
                <div className="md:w-2/3 experience-list relative !pl-8 md:!pl-16 border-l border-white/10">
                    {/* Animated Timeline Line */}
                    <div className="timeline-line absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent shadow-[0_0_10px_rgba(167,139,250,0.5)] origin-top" />

                    <div className="flex flex-col !gap-20">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item relative group">
                                {/* Dot on timeline */}
                                <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full bg-black border-2 border-violet-500 group-hover:bg-violet-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10" />

                                <div className="flex flex-col md:flex-row md:items-baseline gap-4 !mb-4">
                                    <h4 className="text-3xl font-bold text-white">{exp.role}</h4>
                                    <span className="text-violet-400 font-medium tracking-wide">{exp.company}</span>
                                </div>
                                
                                <span className="block text-sm font-bold text-gray-500 uppercase tracking-wider !mb-6">{exp.period}</span>
                                
                                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl !mb-8 group-hover:text-gray-300 transition-colors">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap !gap-3">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold !px-3 !py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:border-violet-500/30 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
