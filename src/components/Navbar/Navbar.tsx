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
      className={`fixed py-10 flex justify-center top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-10"
      }`}
    >
      <div className="max-w-7xl w-full !py-4 mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-lg flex items-center justify-center font-black text-white text-sm group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-violet-500/20">
            RG
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-lg">Ritik Gupta</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Full-Stack Engineer</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                location.pathname === item.path 
                  ? "text-white bg-white/5" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
            <Link 
                to="/contact" 
                className="hidden sm:flex items-center gap-2 text-white font-bold text-sm bg-violet-600 hover:bg-violet-700 !px-6 !py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-violet-600/20 hover:scale-105 active:scale-95"
            >
                Let's Work
            </Link>
            
            {/* Mobile Menu Icon */}
            <button className="md:hidden text-gray-400 hover:text-white transition-colors">
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
