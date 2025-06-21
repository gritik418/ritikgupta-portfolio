import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(115deg, #090249, #1a001f, #310d31, #34046b,#000000)",
      }}
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
