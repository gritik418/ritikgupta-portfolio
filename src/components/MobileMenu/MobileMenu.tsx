import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: PropsType) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useGSAP(() => {

    if (containerRef.current) {
        const starsContainer = containerRef.current;
        const starCount = 20;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "absolute rounded-full border border-white/50 pointer-events-none";
            
            // Random size (1-4px)
            const size = Math.random() * 12 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random opacity for twinkling effect
            const baseOpacity = Math.random() * 0.6 + 0.3;
            star.style.opacity = `${baseOpacity}`;
            
            // Add slight glow to make them more visible
            star.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, ${baseOpacity * 0.5})`;
            
            starsContainer.appendChild(star);
            
            gsap.to(star, {
                x: Math.random() * 2,
                y: Math.random() * 2,
                opacity: Math.random() * 0.2 + 0.1, // Lower opacity for more dramatic blink
                duration: Math.random() * 1.5 + 0.5, // Faster blinking (0.5-2s)
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }
  }, { scope: containerRef });

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed right-0 top-0 h-screen w-[90%] max-w-sm z-50 md:hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/40 overflow-hidden"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute w-px h-px bg-white rounded-full top-20 left-10 animate-twinkle-slow" />
          <div className="absolute w-px h-px bg-white/70 rounded-full top-40 right-20 animate-twinkle" />
          <div className="absolute w-1.5 h-1.5 bg-gradient-to-r from-white to-blue-300 rounded-full bottom-52 left-12 animate-twinkle-slow delay-1500" />
          <div className="absolute w-px h-px bg-white/80 top-[60%] right-8 animate-twinkle delay-3000" />
          <div className="absolute w-0.5 h-0.5 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full bottom-20 left-28 animate-pulse-slow" />
        </div>

        <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-br from-violet-500/15 via-pink-400/10 to-blue-400/15 rounded-full animate-float-slow blur-xl" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full animate-float delay-2000 blur-xl" />
        <div className="absolute inset-0 backdrop-blur-xl bg-black/30 border border-white/20 shadow-2xl" />

        {/* Content */}
        <div ref={containerRef} className="h-full w-full !p-8 relative z-10 flex flex-col !pt-12">
          <div className="flex-1 flex flex-col justify-center !space-y-8">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black bg-gradient-to-r from-white via-violet-100/80 to-white bg-clip-text text-transparent hover:from-violet-200 hover:to-purple-200 transition-all duration-500 hover:scale-105 flex items-center !gap-4 group"
            >
              <div className="w-3 h-12 bg-gradient-to-r from-violet-500/90 to-purple-600 rounded-full group-hover:w-16 group-hover:h-14 transition-all duration-400 shadow-xl shadow-violet-500/40" />
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black bg-gradient-to-r from-white via-violet-100/80 to-white bg-clip-text text-transparent hover:from-violet-200 hover:to-purple-200 transition-all duration-500 hover:scale-105 flex items-center !gap-4 group"
            >
              <div className="w-3 h-12 bg-gradient-to-r from-violet-500/90 to-purple-600 rounded-full group-hover:w-16 group-hover:h-14 transition-all duration-400 shadow-xl shadow-violet-500/40" />
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black bg-gradient-to-r from-white via-violet-100/80 to-white bg-clip-text text-transparent hover:from-violet-200 hover:to-purple-200 transition-all duration-500 hover:scale-105 flex items-center !gap-4 group"
            >
              <div className="w-3 h-12 bg-gradient-to-r from-violet-500/90 to-purple-600 rounded-full group-hover:w-16 group-hover:h-14 transition-all duration-400 shadow-xl shadow-violet-500/40" />
              Contact
            </Link>

            <a
              href="https://github.com/gritik418"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black bg-gradient-to-r from-white via-emerald-100/80 to-white bg-clip-text text-transparent hover:from-emerald-200 hover:to-teal-200 transition-all duration-500 hover:scale-105 flex items-center gap-4 group"
            >
              <div className="w-3 h-12 bg-gradient-to-r from-emerald-500/90 to-teal-600 rounded-full group-hover:w-16 group-hover:h-14 transition-all duration-400 shadow-xl shadow-emerald-500/40" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
