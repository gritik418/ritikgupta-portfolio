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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto h-14 flex items-center justify-between transition-all duration-500 rounded-full px-6 ${
          isScrolled 
            ? "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" 
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-lg flex items-center justify-center font-black text-white text-sm group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-violet-500/20">
            RG
          </div>
          <span className="text-white font-bold tracking-tight text-lg hidden sm:block">Ritik Gupta</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-4 bg-white/5 md:bg-transparent p-1 rounded-full md:p-0">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`relative px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-full hover:text-white ${
                location.pathname === item.path 
                  ? "text-white" 
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 border border-white/5"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
