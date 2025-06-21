import { useEffect, useRef } from "react";
import { FaICursor } from "react-icons/fa";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I&apos;m Ritik Gupta, a passionate full-stack developer with a love for creating beautiful, performant, and impactful web experiences.",
        "I turn <strong>ideas</strong> into interactive web experiences.",
        "Full-stack developer with a love for clean code and UI magic.",
        "Always building. Always learning. Always improving.",
        "From social apps to eCommerce — I&apos;ve built them all.",
        "Let&apos;s create something <strong>amazing</strong> together.",
        "Crafting delightful user experiences with performance in mind.",
        "Scaling APIs, optimizing UIs, and pushing pixels to perfection.",
        "Bridging design & functionality through thoughtful code.",
        "Code is poetry — and I write it with precision.",
        "Built <strong>Huddle</strong> for social connection. Built <strong>Trove</strong> for commerce.",
        "Every line of code is an opportunity to solve a problem.",
        "Turning caffeine & curiosity into full-stack products.",
      ],
      typeSpeed: 30,
      smartBackspace: true,
      loopCount: Infinity,
      loop: true,
      backDelay: 1500,
      shuffle: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="min-h-screen text-white px-6 pt-36">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p
            ref={el}
            className="text-2xl inline text-gray-300 max-w-2xl mx-auto"
          ></p>
        </div>

        {/* Who I Am */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Who I Am</h2>
          <p className="text-gray-300">
            I started my journey into development out of curiosity, which
            quickly turned into a deep passion. Over the years, I&apos;ve built
            projects that solve real problems — from social platforms like{" "}
            <span className="text-white font-medium">Huddle</span> to eCommerce
            applications like{" "}
            <span className="text-white font-medium">Trove</span>.
          </p>
          <p className="text-gray-300">
            My approach combines thoughtful design, solid engineering, and a
            relentless pursuit of simplicity.
          </p>
        </div>

        {/* What I Do */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">What I Do</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Full-stack web development using modern tech like React, Next.js,
              Node, NestJS, and Prisma.
            </li>
            <li>
              Responsive UI/UX design with Tailwind, ShadCN UI, and Chakra UI.
            </li>
            <li>
              Building scalable, secure APIs and integrating with third-party
              services like Cloudinary, Stripe, and Firebase.
            </li>
            <li>Optimizing performance, SEO, and accessibility.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "NestJS",
              "PostgreSQL",
              "MongoDB",
              "TailwindCSS",
              "Prisma",
              "Socket.io",
              "GSAP",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-white/10 px-3 py-1 rounded-full text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Personal / Fun Facts */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">A Bit More</h2>
          <p className="text-gray-300">
            When I&apos;m not coding, I enjoy exploring new tech tools,
            contributing to open-source, and occasionally dabbling with
            animations and UI experiments.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-300">
            Want to collaborate or have a cool idea?
          </p>
          <a
            href="#contact"
            className="inline-block bg-white/20 backdrop-blur-lg mt-4 bg-primary text-white px-6 py-3 rounded-xl ease-in-out duration-300 hover:scale-105 transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
