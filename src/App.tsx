import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import StringElement from "./components/StringElement/StringElement";
import TechStack from "./components/TechStack/TechStack";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090249] via-[#1a001f] to-black">
      <Navbar />
      <Hero />
      <StringElement />
      <TechStack />
    </div>
  );
};

export default App;
