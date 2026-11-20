import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import StarIntro from "./components/StarIntro";

import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project/Project";
import MyExperience from "./components/MyExperience/MyExperience";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Certificate from "./components/Certificate/Certificate";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const SenvraManagement = lazy(() =>import("./Pages/Projects/SenvraManagement"));
const Uangqu = lazy(() => import("./Pages/Projects/Uangqu"));
const Dnote = lazy(() => import("./Pages/Projects/Dnote"));
const IoT = lazy(() => import("./Pages/Projects/Smartroom"));
const Bogorcam = lazy(() => import("./Pages/Projects/Bogorcam"));
const Senvrabuilding = lazy(() =>import("./Pages/Projects/Senvrabuilding"));
const Senvra = lazy(() => import("./Pages/Projects/Senvra"));
const Iklim = lazy(() => import("./Pages/Projects/Iklim"));
const Booksure = lazy(() => import("./Pages/Projects/Booksure"));
const Restauran = lazy(() => import("./Pages/Projects/Restauran"));
const Covidid = lazy(() => import("./Pages/Projects/Covidid"));
const Sembako = lazy(() => import("./Pages/Projects/Sembako"));
const Network = lazy(() => import("./Pages/Projects/Niblenset"));
const Astro = lazy(() => import("./Pages/Projects/Astro"));
const Siom = lazy(() => import("./Pages/Projects/Siom"));
const Haydro = lazy(() => import("./Pages/Projects/Haydro"));
const Powerbi = lazy(() => import("./Pages/Projects/Powerbi"));
const Tableau = lazy(() => import("./Pages/Projects/Tableau"));

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <MyExperience />
      <Education />
      <Experiences />
      <Certificate />
      <Portfolio />
      <Footer />
      <BackToTop />
    </>
  );
}

function PageLoading() {
  return (
    <div className="min-h-screen bg-[#160B2E] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 mx-auto mb-4 rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin" />
        <p className="text-sm text-white/60">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  if (!introDone) {
    return <StarIntro onFinish={() => setIntroDone(true)} />;
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Projects/SenvraManagement"element={<SenvraManagement />}/>
        <Route path="/Projects/Uangqu" element={<Uangqu />} />
        <Route path="/Projects/Dnote" element={<Dnote />} />
        <Route path="/Projects/Smartroom" element={<IoT />} />
        <Route path="/Projects/Bogorcam" element={<Bogorcam />} />
        <Route path="/Projects/Senvrabuilding" element={<Senvrabuilding />}/>
        <Route path="/Projects/Senvra" element={<Senvra />} />
        <Route path="/Projects/Iklim" element={<Iklim />} />
        <Route path="/Projects/Booksure" element={<Booksure />} />
        <Route path="/Projects/Restauran" element={<Restauran />} />
        <Route path="/Projects/Covidid" element={<Covidid />} />
        <Route path="/Projects/Sembako" element={<Sembako />} />
        <Route path="/Projects/Niblenset" element={<Network />} />
        <Route path="/Projects/Astro" element={<Astro />} />
        <Route path="/Projects/Siom" element={<Siom />} />
        <Route path="/Projects/Haydro" element={<Haydro />} />
        <Route path="/Projects/Powerbi" element={<Powerbi />} />
        <Route path="/Projects/Tableau" element={<Tableau />} />
      </Routes>
    </Suspense>
  );
}