import { useState } from "react";
import { X } from "lucide-react";

// BRAND ICONS (VALID)
import { FaFigma } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

/* ================= MAIN COMPONENT ================= */
export default function DesainGrafis() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-24 px-6">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-700/20 text-purple-300 text-sm">
          Design Tools
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Desain Grafis
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Experienced in creating visual designs using industry-standard tools
          for branding, UI/UX, and digital content.
        </p>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Competencies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<SiAdobephotoshop className="w-14 h-14 text-blue-400" />}
            title="Adobe Photoshop"
            desc="Photo editing, retouching, compositing, and digital manipulation."
          />

          <SkillCard
            icon={<SiAdobeillustrator className="w-14 h-14 text-orange-500" />}
            title="Adobe Illustrator"
            desc="Vector design, logo creation, branding, and scalable illustrations."
          />

          <SkillCard
            icon={<FaFigma className="w-14 h-14 text-purple-400" />}
            title="Figma"
            desc="UI/UX design, wireframing, prototyping, and team collaboration."
          />

          <SkillCard
            icon={<SiCanva className="w-14 h-14 text-green-400" />}
            title="Canva"
            desc="Fast visual content creation for social media & marketing."
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
            image="/assets/certificates/Desain Grafis/Ahmad Fadli Desain.jpg"
            title="Desain Grafis"
            provider="Dicoding / Coursera / Udemy"
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

const SkillCard = ({ icon, title, desc }) => (
  <div className="group bg-white/5 backdrop-blur-xl border border-purple-700/30 rounded-2xl p-8 text-center transition hover:scale-105">
    <div className="mb-6 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300">{desc}</p>
  </div>
);

const CertificateCard = ({ image, title, provider, onClick }) => (
  <div
    onClick={() => onClick(image)}
    className="cursor-pointer bg-white/5 border border-purple-700/30 rounded-2xl p-4 backdrop-blur transition hover:scale-105"
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

const ImageModal = ({ image, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative max-w-4xl w-full flex justify-center">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-purple-400"
        >
          <X size={32} />
        </button>

        {/* Image */}
        <div
          className={`transition-transform duration-300 ${
            zoomed ? "scale-110" : "scale-100"
          }`}
        >
          <img
            src={image}
            alt="Certificate Preview"
            onClick={() => setZoomed(!zoomed)}
            className={`max-h-[75vh] w-auto rounded-2xl shadow-2xl cursor-${
              zoomed ? "zoom-out" : "zoom-in"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
