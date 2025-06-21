import { Routes, Route, BrowserRouter as Router } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
