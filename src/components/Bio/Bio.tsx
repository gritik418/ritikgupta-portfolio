import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BioSection = () => {
  const bioTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
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
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: bioTextRef },
  );

  return (
    <div className="bio-section !px-2 relative md:min-h-screen flex items-center justify-center sm:!px-6 !py-24 md:!py-40 border-t border-white/5 bg-black z-10">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-violet-500 mb-8 md:mb-10">
          Agility Meets Craft
        </h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight text-white leading-tight">
          I build solutions that <br className="hidden md:block" />
          <span className="italic font-serif text-violet-400">
            resonate
          </span>{" "}
          and scale.
        </h3>
        <p
          ref={bioTextRef}
          className="text-lg md:text-3xl text-gray-400 leading-relaxed mb-10 md:mb-16 font-light"
        >
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
            <span className="relative z-10 uppercase tracking-widest text-xs">
              View Resume
            </span>
            <div className="absolute inset-0 bg-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-3 text-white font-bold tracking-widest text-[10px] uppercase hover:text-violet-400 transition-colors"
          >
            EXPLORE PROJECTS
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
