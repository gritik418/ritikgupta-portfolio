import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import StringElement from "../components/StringElement/StringElement";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import GithubSection from "../components/GithubSection/GithubSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <div className="relative flex flex-col !pb-16 z-10 bg-black">
        <StringElement />
        <TechStack />
        <div className="h-16 lg:hidden"></div>
        <Experience />
        <div className="h-32"></div>
        <Projects />
        <GithubSection />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
