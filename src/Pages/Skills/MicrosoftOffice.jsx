import { useState } from "react";
import {
  FileText,
  BarChart3,
  Presentation,
  X,
} from "lucide-react";

export default function MicrosoftOffice() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#160033] to-[#2a0a5e] text-white px-6 py-20">

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-700/20 text-purple-300 text-sm">
          Productivity Tools
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Microsoft Office
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experienced in creating professional documents, data analysis,
          and impactful presentations using Microsoft Office tools.
        </p>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-24">

        {/* Word */}
        <SkillCard
          icon={<FileText className="w-14 h-14 text-blue-400" />}
          title="Microsoft Word"
          desc="Professional document creation including reports, proposals, formatting, and structured documentation."
          glow="hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
        />

        {/* Excel */}
        <SkillCard
          icon={<BarChart3 className="w-14 h-14 text-green-400" />}
          title="Microsoft Excel"
          desc="Data processing, formulas, charts, and analysis for efficient decision making."
          glow="hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]"
        />

        {/* PowerPoint */}
        <SkillCard
          icon={<Presentation className="w-14 h-14 text-orange-400" />}
          title="PowerPoint"
          desc="Designing engaging presentations with clear visuals, animations, and structured storytelling."
          glow="hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]"
        />

      </div>

      {/* ================= CERTIFICATES ================= */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CertificateCard
            image="/assets/certificates/microsoft-word.png"
            title="Microsoft Word Certificate"
            provider="Microsoft / Coursera / Udemy"
            onClick={setActiveImage}
          />
        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
      {activeImage && (
        <ImageModal
          image={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}

/* ================= COMPONENTS ================= */

const SkillCard = ({ icon, title, desc, glow }) => (
  <div
    className={`group bg-white/5 backdrop-blur-xl border border-purple-700/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${glow}`}
  >
    <div className="mb-6 group-hover:scale-110 transition">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300">{desc}</p>
  </div>
);

const CertificateCard = ({ image, title, provider, onClick }) => (
  <div
    onClick={() => onClick(image)}
    className="cursor-pointer bg-white/5 border border-purple-700/30 rounded-2xl p-4 backdrop-blur hover:scale-105 transition"
  >
    <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="font-bold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{provider}</p>
  </div>
);

const ImageModal = ({ image, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center px-4">
    <div className="relative max-w-5xl w-full">
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white hover:text-purple-400"
      >
        <X size={32} />
      </button>

      <img
        src={image}
        alt="Certificate Preview"
        className="w-full rounded-2xl shadow-2xl"
      />
    </div>
  </div>
);
