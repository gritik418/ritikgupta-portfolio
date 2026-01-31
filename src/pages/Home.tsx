import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import StringElement from "../components/StringElement/StringElement";
import TechStack from "../components/TechStack/TechStack";

const Home = () => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <div className="relative flex flex-col !pb-16 z-10 bg-black">
        <StringElement />
        <TechStack />
        <div className="h-32"></div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
