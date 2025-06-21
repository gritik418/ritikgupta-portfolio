import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import StringElement from "../components/StringElement/StringElement";
import TechStack from "../components/TechStack/TechStack";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StringElement />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Home;
