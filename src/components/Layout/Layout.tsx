import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen selection:bg-violet-500/30">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
