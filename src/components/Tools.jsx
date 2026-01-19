import { FaGithub, FaFigma, FaMicrosoft } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiBlender,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

import ToolCard from "./ToolCard";

export default function Tools() {
  return (
    <section
      id="tools"
      className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm tracking-widest uppercase">
            Supporting Skills
          </span>
          <h2 className="text-4xl font-bold mt-3">
            Keahlian Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Tools yang saya gunakan untuk mendukung proses pengembangan,
            desain, dan produktivitas kerja.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ToolCard icon={<DiVisualstudio />} title="Visual Studio Code" />
          <ToolCard icon={<FaGithub />} title="GitHub" />
          <ToolCard icon={<FaMicrosoft />} title="Microsoft Office" />
          <ToolCard icon={<FaFigma />} title="Figma" />
          <ToolCard icon={<SiAdobephotoshop />} title="Adobe Photoshop" />
          <ToolCard icon={<SiAdobeillustrator />} title="Adobe Illustrator" />
          <ToolCard icon={<SiAdobeaftereffects />} title="After Effects" />
          <ToolCard icon={<SiBlender />} title="Blender 3D" />
        </div>

      </div>
    </section>
  );
}
