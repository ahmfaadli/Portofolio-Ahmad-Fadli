import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import StarIntro from "./components/StarIntro";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Work from "./components/Work";
import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

// Pages
import IoT from "./pages/Skills/IoT";
import LaptopStore from "./pages/Skills/LaptopStore";
import Covidid from "./pages/Skills/Covidid";
import Moveapp from "./pages/Skills/Moveapp";
import Sembako from "./pages/Skills/Sembako";
import Nusaloka from "./pages/Skills/Nusaloka";
import Restauran from "./pages/Skills/Restauran";
import Projects from "./pages/Project/Projects";
import CertificatesPage from "./pages/Certificate/Certificates";

function App() {
  const [introDone, setIntroDone] = useState(false);

  if (!introDone) {
    return <StarIntro onFinish={() => setIntroDone(true)} />;
  }

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <Skill />
            <Education />
            <Work />
            <Certificates />
            <Portfolio />
            <Tools />
            <Footer />
          </>
        }
      />

      {/* Skills */}
      <Route path="/skills/IoT" element={<IoT />} />

      <Route path="/skills/LaptopStore" element={<LaptopStore />} />

      <Route path="/skills/Covidid" element={<Covidid />} />

      <Route path="/skills/Moveapp" element={<Moveapp />} />

      <Route path="/skills/Sembako" element={<Sembako />} />

      <Route path="/skills/Nusaloka" element={<Nusaloka />} />

      <Route path="/skills/Restauran" element={<Restauran />} />

      {/* Projects */}
      <Route path="/projects" element={<Projects />} />

      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
}

export default App;
