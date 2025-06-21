import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-10 mt-24 flex items-center justify-center bg-black/20 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-6 py-16 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide mb-3">
              Ritik Gupta
            </h2>
            <p className="text-sm text-gray-300">
              Full-Stack Developer building modern web apps with love & logic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#techStack" className="hover:text-white transition">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                Email:{" "}
                <a
                  href="mailto:ritik@example.com"
                  className="hover:text-white transition"
                >
                  gritik418@gmail.com
                </a>
              </li>
              <li>Location: India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <div className="flex items-center space-x-5 text-2xl">
              <a
                href="https://github.com/gritik418"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-gupta-849680251/"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:gritik418@gmail.com"
                className="hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Ritik Gupta. Crafted with care ✨
        </div>
      </div>
    </footer>
  );
};

export default Footer;
