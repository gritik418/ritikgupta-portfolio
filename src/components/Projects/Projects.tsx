import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsAnimations from "../../animations/projectsAnimations";

const projects = [
  {
    title: "Huddle",
    description:
      "A full-stack social media platform where users can share posts, create channels, and upload stories with real-time updates.",
    features: [
      "Next.js + Express.js + MongoDB",
      "JWT Authentication, Multer File Uploads",
      "Real-time chatting via WebSockets",
      "Clean responsive UI using Chakra UI + Tailwind CSS",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "Socket.IO",
      "RTK Query",
      "Chakra UI",
      "Tailwind CSS",
    ],

    image: "/huddle-img.png",
    github: "https://github.com/gritik418/Huddle",
    demo: "https://huddle-app-silk.vercel.app",
  },
  {
    title: "iNotes",
    description:
      "A cloud-based note-taking web app built with Next.js, allowing users to create, edit, and manage notes securely with a clean and fast UI.",
    features: [
      "Next.js + MongoDB stack",
      "JWT-based authentication for secure access",
      "Full CRUD functionality for notes",
      "Clean and responsive UI with Tailwind CSS",
    ],
    tech: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/iNotes-img.png",
    github: "https://github.com/gritik418/iNotes",
    demo: "https://inotes-flame.vercel.app/",
  },
  {
    title: "QuickShare",
    description:
      "A fast and minimal file-sharing platform built with Next.js, enabling users to instantly share files, images, videos, and audio.",
    features: [
      "Built with Next.js and Node.js",
      "Supports uploading and downloading of files including images, videos, audio (MP3), and documents",
      "Clean and responsive UI",
    ],
    tech: ["Next.js", "Node.js", "Express", "Multer", "Tailwind CSS"],
    image: "/QuickShare-img.png",
    github: "https://github.com/gritik418/Quick-Share",
    demo: "https://quick-share-teal.vercel.app/",
  },
];

const Projects = () => {
  useGSAP(() => {
    projectsAnimations();
  });

  return (
    <section className="py-20 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid gap-14 project">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex hover:shadow-white/20 transition-shadow ease-in-out duration-600 project-item flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl object-cover"
              />
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-3">{project.description}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-400">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
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
