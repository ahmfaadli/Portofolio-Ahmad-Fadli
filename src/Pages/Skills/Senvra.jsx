import { useState, useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import Footer from "../../components/Footer";

export default function HTML5() {
  const [activeImage, setActiveImage] = useState(null);

  // Project documentation
  const documentation = [

  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-24 px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-700/20 text-purple-300 text-sm">
            Fullstack Web Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Project Preview
          </h1>
        </div>

        {/* Project Preview */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="group relative overflow-hidden rounded-3xl border border-purple-700/30 hover:border-purple-500 transition-all duration-500">
            <img
              src="/assets/proyek/Senvra1.png"
              alt="Senvra Project"
              className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
              <div className="p-10 w-full">
                <span className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-600/30 text-purple-200 text-sm">
                  React • Laravel
                </span>

                <h3 className="text-4xl font-bold mb-4">Profile Compny Digital Agency</h3>

                <p className="text-gray-300 max-w-2xl mb-6">
                  Website company profile berbasis React & Laravel untuk menampilkan layanan, portofolio, 
                  dan informasi perusahaan dengan desain modern dan responsif.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        "https://github.com/ahmfaadli/company-senvraid.git",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="cursor-pointer inline-flex items-center gap-3 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        "http://Senvra.infinityfreeapp.com",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="cursor-pointer inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <span>Lihat Detail Project</span>
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Project Documentation
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentation.map((doc, index) => (
              <DocumentationCard
                key={index}
                image={doc.image}
                title={doc.title}
                desc={doc.desc}
                onClick={setActiveImage}
              />
            ))}
          </div>
        </div>

        {activeImage && (
          <ImageModal
            image={activeImage}
            onClose={() => setActiveImage(null)}
          />
        )}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

const DocumentationCard = ({ image, title, desc, onClick }) => {
  return (
    <div
      onClick={() => onClick(image)}
      className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-purple-700/30 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300"
    >
      <div className="bg-[#120326] p-4 flex items-center justify-center h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{title}</h3>

        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-6 right-6 text-white hover:text-purple-400 transition z-50"
      >
        <X size={38} />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-6 max-w-[95vw] max-h-[92vh] flex items-center justify-center"
      >
        <img
          src={image}
          alt="Documentation Preview"
          draggable={false}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg select-none"
        />
      </div>
    </div>
  );
};
