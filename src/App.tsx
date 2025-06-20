import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import StringElement from "./components/StringElement/StringElement";
import TechStack from "./components/TechStack/TechStack";

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(115deg, #090249, #1a001f, #310d31, #34046b,#000000)",
      }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <StringElement />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
