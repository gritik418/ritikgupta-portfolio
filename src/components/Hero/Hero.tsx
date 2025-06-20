import { useGSAP } from "@gsap/react";
import HeroImage from "../../assets/hero-img.png";
import heroAnimations from "../../animations/heroAnimations";

const Hero = () => {
  useGSAP(() => {
    heroAnimations();
  });

  return (
    <section className="min-h-screen hero pt-20 flex items-center justify-center px-6">
      <div className="container flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="w-full py-30 lg:py-0 lg:w-[50%] min-h-[400px] flex flex-col lg:pr-8 items-center lg:items-start justify-center">
          <h1 className="text-white text-5xl font-bold tracking-tight">
            👋 Hi, I&apos;m Ritik Gupta
          </h1>

          <p className="text-violet-300 text-base mt-0.5">
            Full-Stack Developer | Clean Code Enthusiast | UI/UX Focused
          </p>

          <p className="text-gray-300 text-center lg:text-start text-xl leading-relaxed mt-6">
            Full-stack developer skilled in building performant, scalable, and
            user-centric web applications. Experienced with modern technologies
            like React, Next.js, Node.js, and MongoDB, with a strong focus on
            clean code, maintainable architecture, and intuitive UI/UX.
            Passionate about turning ideas into meaningful digital products that
            deliver real value.
          </p>

          <a
            href="/Ritik_Gupta_Resume_2025.pdf"
            target="_blank"
            className="bg-violet-900 shadow hover:bg-violet-800 transition-colors ease-in-out duration-300 shadow-violet-200/50 cursor-pointer text-white text-xl px-3 py-2 mt-6 rounded-lg"
          >
            View Resume
          </a>
        </div>

        <div className="flex w-full lg:w-[50%] items-center justify-center lg:justify-end min-h-[400px]">
          <img
            className=" h-[500px] shadow-2xl shadow-violet-300 rounded-2xl"
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
