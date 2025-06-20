import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("nav h1,nav ul li", {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.1,
    });
  });

  return (
    <nav className="fixed top-0 w-screen z-50 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl container mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Ritik Gupta
        </h1>

        <ul className="flex items-center gap-8 text-white text-sm font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
