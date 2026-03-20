import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  FiActivity,
  FiBarChart2,
  FiClock,
  FiLayout,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import {
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiRedis,
  SiNpm,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FiActivity className="w-6 h-6" />,
    title: "Real-time Tracking",
    description:
      "Monitor your activities and progress in real-time with comprehensive dashboards.",
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your data with powerful visualization and reporting tools.",
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Time Management",
    description:
      "Optimize your workflow by keeping track of time spent on various tasks efficiently.",
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Team Collaboration",
    description:
      "Seamlessly work with your team members, share resources, and track joint progress.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Performance Metrics",
    description:
      "Evaluate performance trends over time to make data-driven decisions.",
  },
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: "Customizable Dashboard",
    description:
      "Tailor your workspace to fit your specific needs with a highly adaptable interface.",
  },
];

const TrackrShowcase = () => {
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

      tl.from(".trackr-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".trackr-feature",
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
          ".trackr-tech",
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
          ".trackr-video",
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
      className="relative pb-24! pt-24! bg-[#020617] overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Noise/Texture for Depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto! px-6! relative z-10">
        <div className="text-center mb-16! md:mb-32!">
          <h2 className="trackr-title !text-xl md:text-base uppercase tracking-[0.6em] font-black text-blue-500 mb-8!">
            SaaS Product
          </h2>
          <h3 className="trackr-title text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]!">
            Meet{" "}
            <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600">
              Trackr
            </span>
          </h3>
          <p className="trackr-title text-gray-400 mt-10! max-w-3xl mx-auto! text-xl md:text-2xl font-light leading-relaxed">
            A comprehensive{" "}
            <span className="text-white font-medium">
              tracking & analytics platform
            </span>{" "}
            designed to streamline your workflow and boost productivity.
          </p>

          <div className="trackr-tech mt-12! flex flex-wrap justify-center gap-4 md:gap-7">
            {[
              { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
              {
                icon: SiTypescript,
                label: "TypeScript",
                color: "text-blue-400",
              },
              {
                icon: SiTailwindcss,
                label: "Tailwind",
                color: "text-cyan-400",
              },
              { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
              { icon: SiNestjs, label: "NestJS", color: "text-red-500" },
              { icon: SiRedis, label: "Redis", color: "text-red-500" },
              { icon: SiNpm, label: "BullMQ", color: "text-red-500" },
              {
                icon: SiPostgresql,
                label: "PostgreSQL",
                color: "text-blue-500",
              },
              { icon: SiPrisma, label: "Prisma", color: "text-white" },
              { icon: SiDocker, label: "Docker", color: "text-blue-400" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div
                  className={`p-3 rounded-xl group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
                >
                  <tech.icon
                    className={`w-4 h-4 md:w-6 md:h-6 ${tech.color}`}
                  />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-blue-400 transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Column */}
        <div
          ref={videoRef}
          className="trackr-video max-w-[800px] mx-auto! mb-24! relative flex flex-col lg:flex-row items-center justify-center gap-12!"
        >
          <div className="relative rounded-[2rem] overflow-hidden w-full shadow-[0_40px_100px_rgba(59,130,246,0.15)] bg-black/40 backdrop-blur-sm">
            <video
              src="/Trackr_demo.mp4"
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
                  className="trackr-feature p-6! rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-4! group-hover:scale-110 transition-transform">
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

          <div className="trackr-feature pt-6!">
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://github.com/gritik418/trackr-frontend"
                target="_blank"
                className="inline-flex items-center gap-2! text-white font-bold tracking-widest text-base uppercase hover:text-blue-400 transition-colors"
                rel="noreferrer"
              >
                VIEW SOURCE CODE
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackrShowcase;
