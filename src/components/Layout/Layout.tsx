import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StarsBackground from "../StarsBackground/StarsBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen selection:bg-violet-500/30 relative">
      <StarsBackground />
      <Navbar />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
