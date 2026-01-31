import { useGSAP } from "@gsap/react";
import navbarAnimations from "../../animations/navbarAnimations";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useGSAP(() => {
    navbarAnimations();
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 !py-4 justify-center flex left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/[0.05] py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-violet-600 rounded-xl rotate-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-violet-600/30" />
              <div className="absolute inset-0 flex items-center justify-center font-black text-white text-sm">
                RG
              </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black tracking-tight text-xl uppercase">Ritik Gupta</span>
            <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">Available for work</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.05]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`inline-flex items-center justify-center !px-5 !py-2 text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-500 rounded-full ${
                location.pathname === item.path 
                  ? "text-white bg-white/10 shadow-sm" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-8">
            <Link 
                to="/contact" 
                className="hidden lg:inline-flex items-center justify-center text-white font-black text-xs tracking-widest uppercase bg-violet-600 hover:bg-violet-700 !px-8 !py-4 rounded-full transition-all duration-500 shadow-xl shadow-violet-600/30 hover:scale-105 active:scale-95 border border-violet-400/20"
            >
                Let's Connect
            </Link>
            
            <button className="md:hidden text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
