import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import StarIntro from "./components/StarIntro";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Tools from "./components/Tools";

// pages
import MicrosoftOffice from "./pages/Skills/MicrosoftOffice";
import WebDeveloper from "./Pages/Skills/WebDeveloper";
import FrontendDeveloper from "./Pages/Skills/FrontendDeveloper";
import BackendDeveloper from "./Pages/Skills/BackendDeveloper";
import IoT from "./Pages/Skills/IoT";
import DesainGrafis from "./Pages/Skills/DesainGrafis";

function App() {
  const [introDone, setIntroDone] = useState(false);

  if (!introDone) {
    return <StarIntro onFinish={() => setIntroDone(true)} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <Experience />
            <Skill />
            <Tools />
          </>
        }
      />
      <Route
        path="/skills/microsoft-office"
        element={<MicrosoftOffice />}
        />

      <Route
        path="/skills/WebDeveloper"
        element={<WebDeveloper />}
      />

      <Route
        path="/skills/FrontendDeveloper"
        element={<FrontendDeveloper />}
      />

       <Route
        path="/skills/BackendDeveloper"
        element={<BackendDeveloper />}
      />

        <Route
        path="/skills/IoT"
        element={<IoT />}
      />

      <Route
        path="/skills/DesainGrafis"
        element={<DesainGrafis />}
      />
    </Routes>
  );
}

export default App;
