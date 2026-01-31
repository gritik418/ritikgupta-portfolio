import { useGSAP } from "@gsap/react";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiGreensock,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import techStackAnimations from "../../animations/techStackAnimations";

const techStack = {
  Frontend: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
    { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  ],
  Infrastructure: [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
  ],
};

const TechStack = () => {
  useGSAP(() => {
    techStackAnimations();
  });

  return (
    <section id="techStack" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-violet-500 mb-4">Core Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Tools I use to build scalable products.</h3>
          </div>
          <div className="text-gray-400 md:text-right font-medium max-w-xs text-lg">
            A comprehensive set of modern technologies for end-to-end development.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div 
                key={category} 
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <h3 className="text-xl font-bold mb-8 tracking-tight text-white/90">{category}</h3>
              
              <div className="grid grid-cols-3 gap-6 relative">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-3 group/icon"
                  >
                    <div className="text-3xl filter grayscale group-hover/icon:grayscale-0 transition-all duration-300 transform group-hover/icon:scale-110">
                      {icon}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover/icon:text-violet-400 transition-colors">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
