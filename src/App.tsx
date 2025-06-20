import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090249] via-[#1a001f] to-black">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
