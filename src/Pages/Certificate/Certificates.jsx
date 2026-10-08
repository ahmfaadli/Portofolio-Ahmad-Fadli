import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CertificateCard from "../../components/CertificateCard";

const certificates = [
  {
    id: 1,
    images: [
      "https://g.top4top.io/p_3870wzjv21.jpg",
    ],
    title: "Fullstack Developer",
  },
  {
    id: 2,
    images: [
      "https://i.top4top.io/p_39023667k1.jpg",
      "https://e.top4top.io/p_39028j99r1.jpg",
    ],
    title: "Codeless Data Science",
  },
  {
    id: 3,
    images: [
      "https://d.top4top.io/p_3902euq7b1.jpg",
      "https://d.top4top.io/p_3902t9qs01.jpg",
    ],
    title: "Office Profesional",
  },
  {
    id: 4,
    images: [
      "https://l.top4top.io/p_3876y1ct01.jpg",
    ],
    title: "Kepala Departemen Pendidikan, Teknologi dan Olahraga",
  },
  {
    id: 5,
    images: [
      "https://e.top4top.io/p_38702pebe1.png",
    ],
    title: "Steering Committee ASTRO 7.0",
  },
  {
    id: 6,
    images: [
      "https://b.top4top.io/p_38704x9gw1.png",
    ],
    title: "Steering Committee ICT",
  },
  {
    id: 7,
    images: [
      "https://f.top4top.io/p_3902ty69s1.jpg",
    ],
    title: "Getting Started with Azure IoT",
  },
  {
    id: 8,
    images: [
      "https://e.top4top.io/p_3902cupot1.jpg",
    ],
    title: "Create a Virtual Private Cloud (VPC) Using AWS",
  },
  {
    id: 9,
    images: [
      "https://f.top4top.io/p_3876t8blu1.jpg",
    ],
    title: "AWS S3 Basics",
  },
  {
    id: 10,
    images: [
      "https://i.top4top.io/p_39022067s1.jpg",
    ],
    title: "Linux Fundamental",
  },
  {
    id: 11,
    images: [
      "https://l.top4top.io/p_3902za7op1.jpg",
    ],
    title: "Virtual Machine Fundamental",
  },
  {
    id: 12,
    images: [
      "https://g.top4top.io/p_3902xmz1d1.jpg",
    ],
    title: "Simulasi Jaringan dengan PNETLab",
  },
  {
    id: 13,
    images: [
      "https://k.top4top.io/p_3902t7qc51.jpg",
    ],
    title: "Network Fundamental",
  },
  {
    id: 14,
    images: [
      "https://c.top4top.io/p_3902f2hw41.jpg",
    ],
    title: "Python Fundamental",
  },
  {
    id: 15,
    images: [
      "https://i.top4top.io/p_3902685x21.jpg",
    ],
    title: "Introduction to Model Context Protocol",
  },
  {
    id: 16,
    images: [
      "https://l.top4top.io/p_39023r6d61.jpg",
    ],
    title: "Introduction to Cloude Cowork",
  },
  {
    id: 17,
    images: [
      "https://b.top4top.io/p_3902t1obz1.jpg",
    ],
    title: "Cloude Patform 101",
  },
  {
    id: 18,
    images: [
      "https://a.top4top.io/p_3902rxleo1.jpg",
    ],
    title: "Claude Code in Action",
  },
  {
    id: 19,
    images: [
      "https://j.top4top.io/p_39028g12v1.jpg",
    ],
    title: "Claude Code 101",
  },
  {
    id: 20,
    images: [
      "https://c.top4top.io/p_3902nzwgr1.jpg",
    ],
    title: "Claude 101",
  },
  {
    id: 21,
    images: [
      "https://l.top4top.io/p_39023swc81.jpg",
    ],
    title: "Claude with the Anthropic API",
  },
  {
    id: 22,
    images: [
      "https://e.top4top.io/p_39024bzq31.jpg",
    ],
    title: "AI Fluency: Framework & Foundation",
  },
  {
    id: 23,
    images: [
      "https://i.top4top.io/p_3902axox01.jpg",
    ],
    title: "AI Fluency for students",
  },
  {
    id: 24,
    images: [
      "https://a.top4top.io/p_3902rlbt11.jpg",
    ],
    title: "AI Fluency for educators",
  },
  {
    id: 25,
    images: [
      "https://b.top4top.io/p_3903af98s1.jpg",
    ],
    title: "Basic Proficiency in KNIME Analytics Platform",
  },
  {
    id: 26,
    images: [
      "https://i.top4top.io/p_3902ptiip1.jpg",
      "https://k.top4top.io/p_39028f0cw1.jpg",
      "https://b.top4top.io/p_3902mqguh1.jpg",
    ],
    title: "Memulai Pemrograman Dengan Java",
  },
  {
    id: 27,
    images: [
      "https://i.top4top.io/p_39030xuv12.jpg",
      "https://h.top4top.io/p_39039ydlh1.jpg",
    ],
    title: "Belajar dasar Au",
  },
  {
    id: 28,
    images: [
      "https://d.top4top.io/p_39020v0291.jpg",
      "https://g.top4top.io/p_390295mf41.jpg",
    ],
    title: "Belajar Prinsip Pemrograman SOLID",
  },
  {
    id: 29,
    images: [
      "https://k.top4top.io/p_3903yppl31.jpg",
    ],
    title: "Pelatihn Graphics Design",
  },
  {
    id: 30,
    images: [
      "https://b.top4top.io/p_39038xrbi1.jpg",
    ],
    title: "Staff Media Kreatif BEM STT-NF",
  },
  {
    id: 31,
    images: [
      "https://d.top4top.io/p_39034a0et1.png",
    ],
    title: "Panitia Seminar SpeakUP",
  },
  {
    id: 32,
    images: [
      "https://l.top4top.io/p_39033m5pp1.jpg",
    ],
    title: "Staff Media Kreatif NFSCC",
  },
  {
    id: 34,
    images: [
      "https://e.top4top.io/p_39030sy2h1.jpg",
    ],
    title: "Staff Media Kreatif LDK Senada",
  },
  {
    id: 35,
    images: [
      "https://k.top4top.io/p_39033dmwn1.jpg",
    ],
    title: "Panitia Rapat Pimpinan Daerah JADEBEK LDK",
  },
  {
    id: 36,
    images: [
      "https://h.top4top.io/p_3903cdd9v1.jpg",
    ],
    title: "Panitia Islamic Youth Festival",
  },
  {
    id: 37,
    images: [
      "https://l.top4top.io/p_39038bq6e1.png",
    ],
    title: "Peserta Webinar Strategi Ala Haus",
  },
  {
    id: 38,
    images: [
      "https://f.top4top.io/p_3903tt9mx1.jpg",
    ],
    title: "Peserta Pengabdian Masyarakat",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpen = (certificate) => {
    setSelected(certificate);
    setCurrentImage(0);
  };

  const handleClose = () => {
    setSelected(null);
    setCurrentImage(0);
  };

  const handleNext = () => {
    if (!selected || selected.images.length <= 1) {
      return;
    }

    setCurrentImage((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    if (!selected || selected.images.length <= 1) {
      return;
    }

    setCurrentImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      id="certificates"
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0a0118]
        via-[#18002e]
        to-[#26006a]
        px-4
        py-20
        text-white
        sm:px-5
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-6">

        {/* Header */}
        <div className="text-center">
          <span
            className="
              inline-block
              rounded-full
              border
              border-purple-500/30
              bg-purple-600/20
              px-3
              py-1
              text-xs
              text-purple-300
              sm:px-4
              sm:text-sm
            "
          >
            Sertifikat
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              leading-tight
              sm:mt-5
              sm:text-4xl
              md:text-5xl
            "
          >
            All Certificates
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-xs
              leading-6
              text-gray-400
              sm:mt-5
              sm:text-sm
              sm:leading-7
              md:text-base
            "
          >
            Explore all certificates obtained from training sessions,
            workshops, seminars, courses, and other professional activities.
          </p>
        </div>

        {/* Certificate Grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-3
            gap-2
            sm:mt-16
            sm:gap-4
            md:gap-6
            lg:mt-20
            lg:gap-8
          "
        >
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              image={certificate.images[0]}
              title={certificate.title}
              onClick={() => handleOpen(certificate)}
            />
          ))}
        </div>

        {/* Back Button */}
        <div
          className="
            mt-10
            flex
            justify-center
            sm:mt-12
            lg:mt-14
          "
        >
          <Link
            to="/"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-full
              border
              border-purple-400/40
              bg-purple-500/10
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              transition-transform
              duration-300
              hover:-translate-y-1
              hover:border-purple-400
              hover:bg-purple-500
              hover:shadow-lg
              hover:shadow-purple-500/30
              active:scale-95
              sm:gap-3
              sm:px-6
              sm:py-3.5
              sm:text-sm
              md:px-7
              md:text-base
            "
          >
            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:-translate-x-1
                sm:text-lg
                md:text-xl
              "
            >
              ←
            </span>

            <span>Back to Certificate</span>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selected && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-3
            sm:p-6
          "
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="
              relative
              flex
              w-full
              max-w-6xl
              flex-col
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close certificate"
              className="
                absolute
                right-2
                top-2
                z-50
                text-white
                transition-colors
                hover:text-purple-400
                sm:right-4
                sm:top-4
                lg:right-6
                lg:top-6
              "
            >
              <X
                size={32}
                className="sm:h-9 sm:w-9"
              />
            </button>

            {/* Image */}
            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center
              "
            >
              {selected.images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                  className="
                    absolute
                    left-1
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-lg
                    text-white
                    transition-colors
                    hover:border-purple-400
                    hover:bg-purple-600
                    sm:left-4
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                    lg:left-8
                  "
                >
                  ←
                </button>
              )}

              <img
                src={selected.images[currentImage]}
                alt={`${selected.title} - ${currentImage + 1}`}
                width="1600"
                height="1200"
                decoding="async"
                className="
                  max-h-[75vh]
                  max-w-[90%]
                  rounded-xl
                  object-contain
                  shadow-2xl
                  select-none
                  sm:max-h-[82vh]
                  sm:max-w-[88%]
                  sm:rounded-2xl
                  lg:max-h-[88vh]
                  lg:max-w-[85%]
                "
              />

              {selected.images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="
                    absolute
                    right-1
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-lg
                    text-white
                    transition-colors
                    hover:border-purple-400
                    hover:bg-purple-600
                    sm:right-4
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                    lg:right-8
                  "
                >
                  →
                </button>
              )}
            </div>

            {/* Indicator */}
            {selected.images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
                {selected.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={
                      currentImage === index
                        ? "h-2 w-6 rounded-full bg-purple-500"
                        : "h-2 w-2 rounded-full bg-white/40 transition-colors hover:bg-white/70"
                    }
                  />
                ))}
              </div>
            )}

            {/* Title */}
            <p
              className="
                mt-3
                text-center
                text-sm
                font-medium
                text-gray-300
                sm:mt-4
                sm:text-lg
              "
            >
              {selected.title}
            </p>

            {/* Counter */}
            {selected.images.length > 1 && (
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {currentImage + 1} / {selected.images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}