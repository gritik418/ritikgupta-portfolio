import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      
      setProgress(scrollProgress);
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    if (isVisible) {
      gsap.to(".scroll-to-top", {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(".scroll-to-top", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isVisible]);

  // Calculate circle circumference for SVG stroke-dasharray
  // Radius = 18, Circumference = 2 * PI * 18 ≈ 113
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(124,58,237,0.3)] opacity-0 scale-0 hover:bg-violet-900/20 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      {/* Progress Circle */}
      <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/10"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-violet-500 transition-all duration-100 ease-out"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 text-violet-400 group-hover:-translate-y-1 transition-transform duration-300">
        <FaArrowUp className="text-sm" />
      </div>
      
      {/* Ripple/Pulse Effect */}
      <div className="absolute inset-0 rounded-full border border-violet-500/30 opacity-0 group-hover:animate-ping" />
    </button>
  );
};

export default ScrollToTop;
