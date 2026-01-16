import { useGSAP } from "@gsap/react";
import { MdApi } from "react-icons/md";
import {
  SiAuth0,
  SiBootstrap,
  SiChakraui,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiGreensock,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import techStackAnimations from "../../animations/techStackAnimations";

const techStack = {
  Frontend: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" /> },
    { name: "shadcn/ui", icon: <SiShadcnui /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
    { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
  ],
  "Dev Tools / Infrastructure": [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    { name: "BullMQ", icon: <SiNpm className="text-yellow-400" /> },
  ],
  Extras: [
    { name: "Multer", icon: <SiNpm className="text-red-400" /> },
    { name: "RTK Query", icon: <SiRedux className="text-purple-400" /> },
    { name: "REST API", icon: <MdApi className="text-orange-300" /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "OAuth", icon: <SiAuth0 className="text-blue-600" /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
  ],
  "Validation / Utilities": [
    { name: "Zod", icon: <SiZod className="text-blue-400" /> },
  ],
};

const TechStack = () => {
  useGSAP(() => {
    techStackAnimations();
  });

  return (
    <section id="techStack" className="pb-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid gap-12">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="flex techItem flex-wrap gap-6">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    title={name}
                    className="group w-24 h-24 flex flex-col items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition duration-300 ease-in-out shadow-md"
                  >
                    <div className="text-3xl group-hover:scale-110 transition">
                      {icon}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-center text-gray-300 group-hover:text-white">
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
