import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import StarIntro from "./components/StarIntro";

const SenvraManagement = lazy(() =>
  import("./Pages/Skills/SenvraManagement")
);
const Uangqu = lazy(() =>
  import("./Pages/Skills/Uangqu")
);
const Dnote = lazy(() =>
  import("./Pages/Skills/Dnote")
);
const IoT = lazy(() =>
  import("./Pages/Skills/Smartroom")
);
const LaptopStore = lazy(() =>
  import("./Pages/Skills/Senvrabuilding")
);
const Senvra = lazy(() =>
  import("./Pages/Skills/Senvra")
);
const Restauran = lazy(() =>
  import("./Pages/Skills/Restauran")
);
const Covidid = lazy(() =>
  import("./Pages/Skills/Covidid")
);
const Sembako = lazy(() =>
  import("./Pages/Skills/Sembako")
);
const Network = lazy(() =>
  import("./Pages/Skills/Niblenset")
);
const Astro = lazy(() =>
  import("./Pages/Skills/Astro")
);
const Siom = lazy(() =>
  import("./Pages/Skills/Siom")
);
const CertificatesPage = lazy(() =>
  import("./Pages/Certificate/Certificates")
);

import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Work from "./components/Work";
import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function Home() {
  return (
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
  );
}

function PageLoading() {
  return (
    <div className="min-h-screen bg-[#160B2E] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 mx-auto mb-4 rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin" />
        <p className="text-sm text-white/60">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  if (!introDone) {
    return (
      <StarIntro
        onFinish={() => setIntroDone(true)}
      />
    );
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/skills/SenvraManagement"
          element={<SenvraManagement />}
        />

        <Route
          path="/skills/Uangqu"
          element={<Uangqu />}
        />

        <Route
          path="/skills/Dnote"
          element={<Dnote />}
        />

        <Route
          path="/skills/Smartroom"
          element={<IoT />}
        />

        <Route
          path="/skills/Senvrabuilding"
          element={<LaptopStore />}
        />

        <Route
          path="/skills/Senvra"
          element={<Senvra />}
        />

        <Route
          path="/skills/Restauran"
          element={<Restauran />}
        />

        <Route
          path="/skills/Covidid"
          element={<Covidid />}
        />

        <Route
          path="/skills/Sembako"
          element={<Sembako />}
        />

        <Route
          path="/skills/Niblenset"
          element={<Network />}
        />

        <Route
          path="/skills/Astro"
          element={<Astro />}
        />

        <Route
          path="/skills/Siom"
          element={<Siom />}
        />

        <Route
          path="/certificates"
          element={<CertificatesPage />}
        />
      </Routes>
    </Suspense>
  );
}