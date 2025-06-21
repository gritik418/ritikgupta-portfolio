import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
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
