import { useState } from "react";
import {
  Code,
  Layout,
  Globe,
  Github,
  ExternalLink,
  Award,
  X,
} from "lucide-react";

export default function HTML5() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-24 px-6">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-700/20 text-purple-300 text-sm">
          Web Technology
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Web Developer
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Experienced in building semantic, responsive, and SEO-friendly
          websites using modern HTML5 standards.
        </p>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Competencies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code className="w-14 h-14 text-orange-500" />}
            title="PHP"
            desc="Using header, section, article, and footer for clean structure."
          />
          <SkillCard
            icon={<Layout className="w-14 h-14 text-green-400" />}
            title="Laravel"
            desc="HTML structure optimized for responsive design."
          />
          <SkillCard
            icon={<Globe className="w-14 h-14 text-blue-400" />}
            title="React"
            desc="Meta tags, alt attributes, and ARIA roles."
          />
        </div>
      </div>

      {/* ================= CERTIFICATES ================= */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CertificateCard
            image="/certificates/html5.jpg"
            title="HTML5 Fundamentals"
            provider="Dicoding / Coursera / Udemy"
            onClick={setActiveImage}
          />
        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
      {activeImage && (
        <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </section>
  );
}

/* ================= COMPONENTS ================= */

const SkillCard = ({ icon, title, desc }) => (
  <div className="group bg-white/5 backdrop-blur-xl border border-purple-700/30 rounded-2xl p-8 text-center hover:scale-105 transition">
    <div className="mb-6 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
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
