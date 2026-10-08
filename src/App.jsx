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
import Footer from "./components/Footer";

// Pages
import SenvraManagement from "./Pages/Skills/SenvraManagement";
import Uangqu from "./Pages/Skills/Uangqu";
import Dnote from "./Pages/Skills/Dnote";
import IoT from "./Pages/Skills/IoT";
import LaptopStore from "./Pages/Skills/LaptopStore";
import Covidid from "./Pages/Skills/Covidid";
import Moveapp from "./Pages/Skills/Moveapp";
import Sembako from "./Pages/Skills/Sembako";
import Nusaloka from "./Pages/Skills/Nusaloka";
import Restauran from "./Pages/Skills/Restauran";
import Senvra from "./Pages/Skills/Senvra";
import Siom from "./Pages/Skills/Siom";
import Network from "./Pages/Skills/Network";
import Astro from "./Pages/Skills/Astro";

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
      <Route path="/skills/Senvra" element={<Senvra />} />
      <Route path="/skills/Siom" element={<Siom />} />
      <Route path="/skills/Network" element={<Network />} />
      <Route path="/skills/SenvraManagement" element={<SenvraManagement />} /> 
      <Route path="/skills/Uangqu" element={<Uangqu />} />
      <Route path="/skills/Dnote" element={<Dnote />} />
       <Route path="/skills/Astro" element={<Astro />} />
      

      {/* Projects */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
}

export default App;
