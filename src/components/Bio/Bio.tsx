import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BioSection = () => {
  const bioTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Mouse Parallax for Orbs
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".orb-1", { x: xPos * 0.5, y: yPos * 0.5, duration: 1 });
        gsap.to(".orb-2", { x: -xPos, y: -yPos, duration: 1.5 });
        gsap.to(".orb-3", { x: xPos * 1.5, y: -yPos * 1.5, duration: 2 });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // 2. Continuous Orb Hover Animation
      gsap.to(".bio-orb", {
        scale: 1.2,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });

      // 3. Staggered reveal for bio content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".reveal-tag", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".reveal-title",
          {
            opacity: 0,
            y: 40,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.4",
        )
        .from(
          ".reveal-desc",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".reveal-btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );

      // 4. Magnetic Effect for Resume Button
      const mBtn = bioTextRef.current?.querySelector(".magnetic-btn");
      if (mBtn) {
        const handleMagneticMove = (e: MouseEvent) => {
          const rect = mBtn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(mBtn, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleMagneticLeave = () => {
          gsap.to(mBtn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        };

        mBtn.addEventListener("mousemove", handleMagneticMove as any);
        mBtn.addEventListener("mouseleave", handleMagneticLeave);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          mBtn.removeEventListener("mousemove", handleMagneticMove as any);
          mBtn.removeEventListener("mouseleave", handleMagneticLeave);
        };
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: bioTextRef },
  );

  return (
    <section
      ref={bioTextRef}
      className="bio-section relative overflow-hidden bg-[#0a0a0a] !py-24 !px-6 md:!px-12 z-10 selection:bg-violet-500/30"
    >
      {/* Editorial Background: Floating Orbs & Noise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

        <div className="bio-orb orb-1 absolute top-[10%] left-[60%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="bio-orb orb-2 absolute bottom-[20%] right-[70%] w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] rounded-full" />
        <div className="bio-orb orb-3 absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl !mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 !gap-16 lg:!gap-24 items-center">
          {/* Left Side: Content (7 columns) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="reveal-tag flex items-center !gap-4 !mb-10 overflow-hidden">
              <div className="w-12 h-[1px] bg-violet-500" />
              <span className="text-xs uppercase tracking-[0.6em] font-bold text-violet-500">
                The Architect
              </span>
            </div>

            <h2 className="reveal-title text-5xl md:text-[clamp(3.5rem,8vw,9rem)] font-bold tracking-tighter leading-[0.9] text-white !mb-12">
              BUILDING <br />
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400">
                INTUITIVE
              </span>
              <br />
              SYSTEMS.
            </h2>

            <div className="reveal-desc !max-w-2xl">
              <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-light !mb-12">
                Specializing in high-performance web architectures that bridge
                the gap between complex logic and stunning visual experiences. I
                don&apos;t just code; I craft digital ecosystems that scale with
                your vision.
              </p>

              <div className="flex !gap-8 items-center">
                <a
                  href="#projects"
                  className="reveal-btn group flex items-center !gap-4 text-white hover:text-violet-400 transition-colors !py-4"
                >
                  <span className="text-base uppercase tracking-[0.5em] font-black border-b border-white/10 group-hover:border-violet-400 !pb-1 transition-all">
                    Works
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-400 group-hover:border-violet-400 group-hover:text-black transition-all">
                    <svg
                      className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Decorative Cluster (4 columns) */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="relative w-full aspect-square reveal-title">
              {/* Animated Floating Structure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-white/10 animate-[blob_7s_infinite] bg-gradient-to-br from-violet-500/10 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <div className="w-48 h-48 rounded-full border border-violet-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 rounded-full bg-violet-500/5 blur-xl" />
                  </div>
                </div>
              </div>

              {/* Stats/Floating elements */}
              <div className="absolute top-0 right-0 !p-6 !rounded-2xl border !border-white/5 !bg-white/5 !backdrop-blur-md animate-[float_4s_infinite_ease-in-out]">
                <span className="text-3xl font-black text-white">AI</span>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">
                  Powered Projects
                </p>
              </div>
              <div className="absolute bottom-10 left-[-20px] !p-6 !rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md animate-[float_5s_infinite_ease-in-out] delay-500">
                <span className="text-3xl font-black text-white">20+</span>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12! items-center">
          <a
            href="/Ritik_Gupta_Resume_2025.pdf"
            target="_blank"
            className="magnetic-btn group relative inline-flex items-center justify-center px-12! py-6! overflow-hidden rounded-2xl font-bold uppercase tracking-[0.2em] text-xs text-white bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 active:scale-95 shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)] hover:border-violet-500/50"
          >
            {/* Liquid Fill Background */}
            <span className="absolute inset-0 translate-y-[101%] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-y-0"></span>

            {/* Animated Glow Rim */}
            <span className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 blur-sm -z-10"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-4! transition-transform duration-300 group-hover:scale-105">
              <span className="relative text-xl font-bold">
                Get Resume
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/60 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <div className="relative">
                <svg
                  className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
