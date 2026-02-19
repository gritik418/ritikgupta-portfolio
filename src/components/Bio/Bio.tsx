import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BioSection = () => {
  const bioTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".bio-nebula", {
        scale: 1.2,
        opacity: 0.5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Staggered reveal for bio content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".bio-tagline", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".bio-title",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".bio-description",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".bio-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.6",
        );
    },
    { scope: bioTextRef },
  );

  return (
    <div
      ref={bioTextRef}
      className="bio-section relative overflow-hidden flex items-center justify-center !py-32 md:!py-52 bg-black z-10"
    >
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bio-nebula absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-violet-900/20 via-transparent to-transparent blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Glassmorphic Container */}
        <div className="relative group p-8 md:p-16 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          {/* Tagline */}
          <h2 className="bio-tagline text-xs uppercase tracking-[0.5em] font-bold text-violet-500 mb-8 md:mb-10 opacity-100">
            Agility Meets Craft
          </h2>

          {/* Title */}
          <h3 className="bio-title text-4xl md:text-8xl font-bold mb-8 md:mb-12 tracking-tight leading-tight">
            <span className="text-white">I build solutions that</span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 italic font-serif">
              resonate
            </span>
            <span className="text-white"> and scale.</span>
          </h3>

          {/* Description */}
          <p className="bio-description text-lg md:text-3xl text-gray-400 leading-relaxed mb-12 md:mb-20 font-light max-w-3xl mx-auto">
            Specializing in the modern web stack, I bridge the gap between
            complex system architecture and delightful user interfaces. Every
            line of code is written with purpose and performance in mind.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <a
              href="/Ritik_Gupta_Resume_2025.pdf"
              target="_blank"
              className="bio-cta group relative px-12 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs">
                View Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <a
              href="#projects"
              className="bio-cta group flex items-center gap-3 text-white font-bold tracking-widest text-[10px] uppercase hover:text-violet-400 transition-all duration-300"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-violet-400 after:transition-all after:duration-300 group-hover:after:w-full">
                EXPLORE PROJECTS
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-violet-500"
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
    </div>
  );
};

export default BioSection;
