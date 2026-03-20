import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import Robot from "./Robot";
import {
  FiCpu,
  FiDatabase,
  FiMessageSquare,
  FiShield,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import { SiPython, SiOllama, SiDatabricks } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: "Local-First RAG",
    description:
      "Built with a robust Retrieval-Augmented Generation pipeline using Ollama and local LLMs for cost-effective, high-performance inference.",
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Privacy Focused",
    description:
      "All computations and data processing happen locally, ensuring your data never leaves your infrastructure.",
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: "Persistent Vector DB",
    description:
      "Uses Chroma DB for efficient storage and retrieval of semantic embeddings from custom documents and project data.",
  },
  {
    icon: <FiMessageSquare className="w-6 h-6" />,
    title: "Contextual Intelligence",
    description:
      "Equipped with conversational query rewriting and coreference resolution to maintain context throughout the dialogue.",
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: "Grounded Responses",
    description:
      "Answers are strictly grounded in provided data, minimizing hallucinations and ensuring accuracy.",
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Modular Architecture",
    description:
      "Clean separation of ingestion, retrieval, and generation layers for production-ready scalability.",
  },
];

const ChatbotShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featureListRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".chatbot-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".chatbot-feature",
          {
            opacity: 0,
            x: -30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".chatbot-tech",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          ".chatbot-video",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative pb-8! pt-24! bg-black overflow-hidden"
    >
      {/* Background Patterns & Accents */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(#2e1065_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-violet-900/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-fuchsia-600/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto! px-6! relative z-10">
        <div className="text-center mb-16! md:mb-32!">
          <h2 className="chatbot-title text-xl! md:text-base uppercase tracking-[0.6em] font-black text-violet-500 mb-8!">
            AI Portfolio Assistant
          </h2>
          <h3 className="chatbot-title text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]!">
            Next-Gen{" "}
            <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 animate-gradient">
              Interaction
            </span>
          </h3>
          <p className="chatbot-title text-gray-400 mt-10! max-w-3xl mx-auto! text-xl md:text-2xl font-light leading-relaxed">
            An intelligent{" "}
            <span className="text-white font-medium">RAG-based assistant</span>{" "}
            that bridges the gap between static content and interactive
            discovery. Professional knowledge, encoded.
          </p>

          <div className="chatbot-tech mt-12! flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: SiPython, label: "Python", color: "text-yellow-500" },
              { icon: SiOllama, label: "Ollama", color: "text-white" },
              {
                icon: SiDatabricks,
                label: "ChromaDB",
                color: "text-orange-500",
              },
              {
                icon: LuBrainCircuit,
                label: "RAG",
                color: "text-purple-400",
              },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div
                  className={`p-3 rounded-xl group-hover:border-violet-500/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]`}
                >
                  <tech.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${tech.color}`}
                  />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-violet-400 transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Column */}
        <div
          ref={videoRef}
          className="chatbot-video max-w-[680px] mx-auto! mb-24! relative flex flex-col lg:flex-row items-center justify-center gap-12!"
        >
          {/* Robot Helper */}
          <div className="hidden absolute z-200 bottom-0 translate-y-1/3 left-0 -translate-x-1/2 md:block">
            <Robot />
          </div>

          <div className="relative rounded-[2rem] overflow-hidden w-full shadow-[0_40px_100px_rgba(139,92,246,0.15)] bg-black/40 backdrop-blur-sm">
            <video
              src="/portfolio-chatbot.mp4"
              autoPlay
              loop
              muted
              playsInline
              // @ts-ignore
              type="video/mp4"
              className="w-full aspect-video object-cover"
            />

            {/* Decorative Frame Elements */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16! items-center">
          {/* Features Column */}
          <div ref={featureListRef} className="space-y-8!">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="chatbot-feature p-6! rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4! group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2!">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="chatbot-feature pt-6!">
            <a
              href="https://github.com/gritik418/rag-portfolio-bot"
              target="_blank"
              className="inline-flex items-center gap-2! text-white font-bold tracking-widest text-base uppercase hover:text-violet-400 transition-colors"
            >
              VIEW SOURCE CODE
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotShowcase;
