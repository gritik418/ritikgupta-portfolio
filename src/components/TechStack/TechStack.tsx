import { useGSAP } from "@gsap/react";
import {
  SiAuth0,
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiCloudinary,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiRender,
  SiShadcnui,
  SiSocketdotio, SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod
} from "react-icons/si";
import techStackAnimations from "../../animations/techStackAnimations";

const techStack = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "React Native", icon: <SiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
    { name: "ShadCN", icon: <SiShadcnui /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-500" /> },
    { name: "Axios", icon: <SiAxios className="text-purple-600" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Zustand", icon: <SiRedux className="text-yellow-600" /> }, // Using Redux icon as fallback or similar store icon if SiZustand is not standard
    { name: "Zod", icon: <SiZod className="text-blue-600" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Passport.js", icon: <SiPassport className="text-green-400" /> },
    { name: "OAuth", icon: <SiAuth0 className="text-orange-500" /> },
  ],
  Infrastructure: [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Render", icon: <SiRender /> },
    { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    { name: "BullMQ", icon: <SiNpm className="text-yellow-500" /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ],
};

const TechStack = () => {
  useGSAP(() => {
    techStackAnimations();
  });

  return (
    <section id="techStack" className="!px-6 py-20 md:!py-32 flex gap-8 flex-col items-center !space-y-6 w-full bg-black text-white">
      <div className="max-w-7xl flex flex-col gap-8 w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end w-full justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-violet-500 mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">Tools I use to build scalable products.</h3>
          </div>
          <div className="text-gray-400 md:text-right font-medium max-w-xs text-lg">
            A comprehensive set of modern technologies for end-to-end development.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div 
                key={category} 
                className="group relative !p-5 md:!p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="flex flex-col items-center !mb-10">
                <h3 className="text-2xl font-bold tracking-[0.2em] text-white uppercase text-center relative z-10">
                  {category}
                </h3>
                <div className="w-12 h-1 bg-violet-500 rounded-full mt-4 group-hover:w-24 transition-all duration-500" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 relative">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-3 group/icon w-16 md:w-20"
                  >
                    <div className="text-3xl filter grayscale group-hover/icon:grayscale-0 transition-all duration-300 transform group-hover/icon:scale-110">
                      {icon}
                    </div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-center text-gray-500 group-hover/icon:text-violet-400 transition-colors">
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
