import { useEffect, useState } from "react";
import { X, ExternalLink, Github, Code2 } from "lucide-react";
import Footer from "../../components/Footer";

export default function HTML5() {
  const [activeImage, setActiveImage] = useState(null);

  // Dokumentasi project
  const documentation = [
    {
      image: "/assets/documentation2/DiagramNiblenest.jpg",
      title: "Flow Chart",
    },
    {
      image: "/assets/documentation2/UseCase.jpg",
      title: "Use Case Diagram",
      desc: "Interaksi user dengan sistem.",
    },
    {
      image: "/assets/documentation2/DatabaseSchema.jfif",
      title: "Database Schema",
      desc: "Struktur dan relasi database.",
    },
    {
      image: "/assets/documentation2/UI.png",
      title: "UI Design",
      desc: "Rancangan tampilan website.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        {/* =========================
            HEADER
        ========================== */}
        <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-5 md:mb-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Project Preview
          </h1>
        </div>

        {/* =========================
            PROJECT PREVIEW
        ========================== */}
        <div className="max-w-6xl mx-auto mb-4 sm:mb-5 md:mb-6">
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-700/30 bg-[#120326]">
            <img
              src="/assets/hook/restauran-hook.webp"
              alt="Laptop E-Commerce"
              className="
                w-full
                h-auto
                min-h-[360px]
                sm:min-h-[420px]
                md:h-[500px]
                lg:h-[550px]
                object-cover
                group-hover:scale-[1.02]
                transition
                duration-500
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex items-end">
              <div className="p-5 sm:p-7 md:p-10 w-full">
                {/* Technology */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-xs sm:text-sm">
                    React.js
                  </span>

                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-xs sm:text-sm">
                    Laravel
                  </span>

                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-xs sm:text-sm">
                    MySQL
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                  MPOROS Sistem Pemesanan Restoran Berbasis Web
                </h2>

                {/* GitHub */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        "https://github.com/ahmfaadli/MPOROS_PROJECT.git",
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
                        "#",
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

        {/* =========================
            PROJECT DESCRIPTION
        ========================== */}
        <div className="max-w-6xl mx-auto mb-4 sm:mb-5 md:mb-6">
          <div
            className="
              bg-white/[0.04]
              border
              border-purple-700/20
              rounded-xl
              sm:rounded-2xl
              p-5
              sm:p-6
              md:p-8
            "
          >
            {/* Title */}
            <div className="flex items-center gap- mb-1">
              <div className="p-2 sm:p-2.5 rounded-lg bg-purple-600/10 text-purple-300 shrink-0">
                <Code2 size={20} />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold">
                Deskripsi Project
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
              MPOROS merupakan aplikasi web yang dikembangkan untuk membantu proses pengelolaan 
              restoran, mulai dari menampilkan dan mengelola menu, kategori makanan, pencatatan 
              pesanan, hingga pemantauan aktivitas restoran melalui dashboard. Pada bagian frontend, 
              aplikasi dibangun menggunakan React dan Vite dengan Tailwind CSS untuk membuat 
              antarmuka yang responsif, React Router untuk navigasi, Axios untuk komunikasi dengan 
              backend, serta Recharts untuk menampilkan data dalam bentuk visual. Bagian backend 
              menggunakan PHP dengan framework Laravel 12 yang menyediakan REST API untuk mengelola 
              menu, kategori, dashboard, dan pesanan, serta terintegrasi dengan Midtrans untuk 
              mendukung proses pembayaran. Data aplikasi dikelola melalui sistem database Laravel 
              dan digunakan untuk menyimpan informasi menu, kategori, serta transaksi pesanan 
              sehingga seluruh proses pengelolaan restoran dapat dilakukan secara terintegrasi 
              melalui satu aplikasi
            </p>
          </div>
        </div>

        {/* =========================
            DOCUMENTATION
        ========================== */}
        <div className="max-w-6xl mx-auto">
          {/* Main Documentation Card */}
          <div
            className="
              bg-white/[0.04]
              border
              border-purple-700/20
              rounded-xl
              sm:rounded-2xl
              p-5
              sm:p-6
              md:p-8
            "
          >
            {/* Documentation Header */}
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="p-2 sm:p-2.5 rounded-lg bg-purple-600/10 text-purple-300 shrink-0">
                <Code2 size={20} />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold">
                Dokumentasi Project
              </h2>
            </div>

            {/* Documentation Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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
        </div>

        {/* =========================
            IMAGE MODAL
        ========================== */}
        {activeImage && (
          <ImageModal
            image={activeImage}
            onClose={() => setActiveImage(null)}
          />
        )}
      </section>

      <Footer />
    </>
  );
}

/* ============================================================
   DOCUMENTATION CARD
============================================================ */

const DocumentationCard = ({ image, title, desc, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="
        group
        text-left
        w-full
        bg-black/10
        border
        border-purple-700/20
        rounded-xl
        overflow-hidden
        hover:border-purple-500/50
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-purple-500/40
      "
    >
      {/* Image */}
      <div
        className="
          bg-[#120326]
          h-48
          sm:h-56
          md:h-64
          lg:h-72
          p-3
          sm:p-4
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            max-w-full
            max-h-full
            w-auto
            h-auto
            object-contain
            group-hover:scale-[1.03]
            transition
            duration-500
          "
        />
      </div>

      {/* Information */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white break-words">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-5">
              {desc}
            </p>
          </div>

          <ExternalLink size={16} className="shrink-0 text-purple-400 mt-1" />
        </div>
      </div>
    </button>
  );
};

/* ============================================================
   IMAGE MODAL
============================================================ */

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        bg-black/85
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-3
        sm:p-5
      "
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="
          absolute
          top-3
          right-3
          sm:top-6
          sm:right-6
          w-9
          h-9
          sm:w-10
          sm:h-10
          rounded-full
          bg-white/10
          flex
          items-center
          justify-center
          text-white
          hover:bg-white/20
          hover:text-purple-300
          transition
          z-10
        "
      >
        <X size={21} className="sm:w-6 sm:h-6" />
      </button>

      {/* Image */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          bg-white
          rounded-xl
          sm:rounded-2xl
          p-2
          sm:p-3
          md:p-4
          max-w-[96vw]
          max-h-[90vh]
          sm:max-h-[92vh]
          shadow-2xl
          overflow-hidden
        "
      >
        <img
          src={image}
          alt="Project Documentation"
          draggable={false}
          className="
            block
            max-w-[92vw]
            sm:max-w-[90vw]
            md:max-w-[85vw]
            max-h-[84vh]
            sm:max-h-[86vh]
            md:max-h-[88vh]
            w-auto
            h-auto
            object-contain
            rounded-lg
          "
        />
      </div>
    </div>
  );
};
