import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/[0.05] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl container mx-auto px-6 py-24 text-white relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center font-black text-white text-sm group-hover:rotate-6 transition-transform">
                    RG
                </div>
                <span className="text-2xl font-black tracking-tight uppercase">Ritik Gupta</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Full-Stack Engineer crafting high-performance, immersive digital experiences for the modern web.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-violet-500 mb-8">Navigation</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="/#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Core Philosophy</Link></li>
              <li><a href="/#techStack" className="hover:text-white transition-colors">Tech Capabilities</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-violet-500 mb-8">Direct Contact</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>
                <a href="mailto:gritik418@gmail.com" className="hover:text-white transition-colors block">
                  gritik418@gmail.com
                </a>
              </li>
              <li className="text-white/60">Currently based in India</li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm">Available for projects</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-violet-500 mb-8">Social Orbit</h3>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/gritik418" target="_blank" className="text-2xl text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ritik-gupta-849680251/" target="_blank" className="text-2xl text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="mailto:gritik418@gmail.com" className="text-2xl text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <FaEnvelope />
              </a>
            </div>
            <div className="mt-8">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Updated Jan 2026</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Ritik Gupta. Built with precision and Next-generation logic.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
