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
      className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-12 sm:py-16 md:py-20 px-3 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-purple-400 text-[9px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">
            Supporting Skills
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3">
            Keahlian Tools
          </h2>

          <p className="text-gray-400 text-[11px] sm:text-sm md:text-base max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Tools yang saya gunakan untuk mendukung proses pengembangan,
            desain, dan produktivitas kerja.
          </p>
        </div>

        {/* Tools Grid */}
        <div
          className="
            grid grid-cols-4
            gap-x-2 gap-y-3
            sm:grid-cols-2 sm:gap-5
            md:grid-cols-3 md:gap-6
            lg:grid-cols-4 lg:gap-8
          "
        >
          <ToolCard
            icon={<DiVisualstudio />}
            title="VS Code"
          />

          <ToolCard
            icon={<FaGithub />}
            title="GitHub"
          />

          <ToolCard
            icon={<FaMicrosoft />}
            title="Office"
          />

          <ToolCard
            icon={<FaFigma />}
            title="Figma"
          />

          <ToolCard
            icon={<SiAdobephotoshop />}
            title="Photoshop"
          />

          <ToolCard
            icon={<SiAdobeillustrator />}
            title="Illustrator"
          />

          <ToolCard
            icon={<SiAdobeaftereffects />}
            title="After Effects"
          />

          <ToolCard
            icon={<SiBlender />}
            title="Blender"
          />
        </div>
      </div>
    </section>
  );
}