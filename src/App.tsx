import { Routes, Route, BrowserRouter as Router } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
