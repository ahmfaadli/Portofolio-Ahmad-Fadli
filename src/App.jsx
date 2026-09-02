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
import IoT from "./Pages/Skills/IoT";
import LaptopStore from "./Pages/Skills/LaptopStore";
import Covidid from "./Pages/Skills/Covidid";
import Moveapp from "./Pages/Skills/Moveapp";
import Sembako from "./Pages/Skills/Sembako";
import Nusaloka from "./Pages/Skills/Nusaloka";
import Restauran from "./Pages/Skills/Restauran";

import Projects from "./Pages/Project/Projects";
import CertificatesPage from "./Pages/Certificate/Certificates";

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