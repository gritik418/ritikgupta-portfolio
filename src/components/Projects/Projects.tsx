import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsAnimations from "../../animations/projectsAnimations";

const projects = [
  {
    title: "Huddle",
    subtitle: "Real-time Social Platform",
    description:
      "A full-stack social media platform where users can share posts, create channels, and upload stories with real-time updates via WebSockets.",
    tech: ["Next.js", "Node.js", "TypeScript","MongoDB", "Socket.IO", "Chakra UI"],
    image: "/huddle-img.png",
    github: "https://github.com/gritik418/Huddle",
    demo: "https://huddle-app-silk.vercel.app",
    color: "from-violet-600/20 to-transparent"
  },
  {
    title: "iNotes",
    subtitle: "Cloud Productivity",
    description:
      "A secure, cloud-based note-taking web app allowing users to manage their daily tasks and thoughts with a lightning-fast UI.",
    tech: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/iNotes-img.png",
    github: "https://github.com/gritik418/iNotes",
    demo: "https://inotes-flame.vercel.app/",
    color: "from-fuchsia-600/20 to-transparent"
  },
  {
    title: "QuickShare",
    subtitle: "Instant File Sharing",
    description:
      "A minimal file-sharing platform enabling users to instantly share documents, media, and more with auto-expiring links.",
    tech: ["Next.js", "Express", "Multer", "Tailwind CSS"],
    image: "/QuickShare-img.png",
    github: "https://github.com/gritik418/Quick-Share",
    demo: "https://quick-share-teal.vercel.app/",
    color: "from-blue-600/20 to-transparent"
  },
];

const Projects = () => {
  useGSAP(() => {
    projectsAnimations();
  });

  return (
    <section className="py-20 md:py-32 !pt-20 !px-2 sm:!px-0 bg-black flex gap-8 flex-col items-center !space-y-6 w-full overflow-hidden" id="projects">
      <div className="max-w-7xl flex flex-col gap-8 w-full mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-violet-500 mb-4 ml-1">Selection of work</h2>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white">Featured Projects</h3>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-item flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 md:gap-20 group`}
            >
              {/* Image Column */}
              <div className="w-full md:w-[60%] relative">
                <div className={`absolute -inset-4 bg-gradient-to-br ${project.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-[40%] flex flex-col justify-center">
                <span className="text-violet-500 font-bold tracking-wider text-sm uppercase !mb-3">{project.subtitle}</span>
                <h4 className="text-3xl md:text-4xl font-bold text-white !mb-6 tracking-tight">{project.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed !mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 !mb-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-white/5 border border-white/10 !px-4 !py-1.5 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-white font-bold hover:text-violet-400 transition-colors"
                  >
                    <FaGithub className="text-xl" /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-white font-bold hover:text-violet-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
