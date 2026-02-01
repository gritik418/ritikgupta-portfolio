interface AnimatedHamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      className="md:hidden p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl group transition-all duration-200 hover:bg-white/10 active:scale-95"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Hamburger Lines */}
      <span
        className={`block w-7 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out rounded-full ${
          isOpen
            ? "w-7 rotate-45 translate-y-1.5"
            : "w-7 group-hover:w-8 group-hover:bg-white"
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out rounded-full ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 group-hover:w-7"
        }`}
      />
      <span
        className={`block w-7 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out rounded-full ${
          isOpen
            ? "w-7 -rotate-45 -translate-y-1.5"
            : "w-7 group-hover:w-8 group-hover:bg-white"
        }`}
      />
    </button>
  );
};

export default AnimatedHamburger;
