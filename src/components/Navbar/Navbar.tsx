import { useGSAP } from "@gsap/react";
import navbarAnimations from "../../animations/navbarAnimations";

const Navbar = () => {
  useGSAP(() => {
    navbarAnimations();
  });

  return (
    <nav className="fixed top-0 w-screen z-100 flex items-center justify-center bg-violet-900/30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl container mx-auto px-6 h-20 flex items-center justify-between">
        <img
          src="/logo.png"
          className="text-white h-28 text-2xl font-bold tracking-wide"
        />

        <ul className="flex items-center gap-8 text-white text-sm font-semibold">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
