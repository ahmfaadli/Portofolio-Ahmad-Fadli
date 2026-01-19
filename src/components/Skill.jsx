import SkillCard from "./SkillCard";
import {
  FaMicrosoft,
  FaGlobe,
  FaLaptopCode,
  FaServer,
  FaMicrochip,
  FaPalette,
  FaVideo,
  FaFilm,
  FaCube,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

export default function Skill() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Core Skills</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Microsoft Office */}
          <SkillCard
            icon={<FaMicrosoft className="text-blue-400" />}
            title="Microsoft Office"
            desc="Word, Excel, PowerPoint."
            to="/skills/microsoft-office"
          />

          {/* Web Developer */}
          <SkillCard
            icon={<FaGlobe className="text-cyan-400" />}
            title="Web Developer"
            desc="Building responsive and dynamic websites."
            to={"/skills/WebDeveloper"}
          />

          {/* Frontend Developer */}
          <SkillCard
            icon={<FaLaptopCode className="text-green-400" />}
            title="Frontend Developer"
            desc="User interface and user experience development."
            to={"/skills/FrontendDeveloper"}
          />

          {/* Backend Developer */}
          <SkillCard
            icon={<FaServer className="text-indigo-400" />}
            title="Backend Developer"
            desc="Server-side logic and API development."
            to={"/skills/BackendDeveloper"}
          />

          {/* IoT */}
          <SkillCard
            icon={<FaMicrochip className="text-emerald-400" />}
            title="Internet of Things (IoT)"
            desc="Microcontroller and sensor integration."
            to={"/skills/IoT"}
          />

          {/* UI/UX Design */}
          <SkillCard
            icon={<FaPalette className="text-pink-400" />}
            title="Basic UI/UX Design"
            desc="Wireframing and interface design."
          />

          {/* Graphic Design */}
          <SkillCard
            icon={<FaPalette className="text-orange-400" />}
            title="Desain Grafis"
            desc="Poster and social media content design."
            to={"/Skills/DesainGrafis"}
          />

          {/* Video Editing */}
          <SkillCard
            icon={<FaVideo className="text-red-400" />}
            title="Video Editing"
            desc="Editing and visual storytelling."
          />

          {/* Motion Graphic */}
          <SkillCard
            icon={<FaFilm className="text-purple-400" />}
            title="Motion Graphic"
            desc="Animated visual content."
          />

          {/* 3D Design */}
          <SkillCard
            icon={<FaCube className="text-yellow-400" />}
            title="3D Design & Modeling"
            desc="3D modeling and basic animation."
          />

          {/* Data Analysis */}
          <SkillCard
            icon={<FaChartLine className="text-blue-300" />}
            title="Data Analysis"
            desc="Data processing and insight generation."
          />

          {/* Data Visualization */}
          <SkillCard
            icon={<FaChartBar className="text-green-300" />}
            title="Data Visualization"
            desc="Dashboard and data presentation."
          />
        </div>
      </div>
    </section>
  );
}
