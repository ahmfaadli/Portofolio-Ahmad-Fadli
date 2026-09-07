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
    id: 1,
    images: [
      "https://i.top4top.io/p_39022067s1.jpg",
    ],
    title: "Fullstack Developer",
  },
  {
    id: 2,
    images: [
      "https://l.top4top.io/p_3902za7op1.jpg",
    ],
    title: "Codeless Data Science",
  },
  {
    id: 3,
    images: [
      "https://g.top4top.io/p_3902xmz1d1.jpg",
    ],
    title: "Office Profesional",
  },
  {
    id: 4,
    images: [
      "https://k.top4top.io/p_3902t7qc51.jpg",
    ],
    title: "Kepala Departemen Pendidikan, Teknologi dan Olahraga",
  },
  {
    id: 5,
    images: [
      "https://c.top4top.io/p_3902f2hw41.jpg",
    ],
    title: "Steering Committee ASTRO 7.0",
  },
  {
    id: 6,
    images: [
      "https://i.top4top.io/p_3902685x21.jpg",
    ],
    title: "Steering Committee ICT",
  },
  {
    id: 7,
    images: [
      "https://l.top4top.io/p_39023r6d61.jpg",
    ],
    title: "Getting Started with Azure IoT",
  },
  {
    id: 8,
    images: [
      "https://b.top4top.io/p_3902t1obz1.jpg",
    ],
    title: "Create a Virtual Private Cloud (VPC) Using AWS",
  },
  {
    id: 9,
    images: [
      "https://a.top4top.io/p_3902rxleo1.jpg",
    ],
    title: "AWS S3 Basics",
  },

    {
    id: 6,
    images: [
      "https://j.top4top.io/p_39028g12v1.jpg",
    ],
    title: "Steering Committee ICT",
  },
  {
    id: 7,
    images: [
      "https://c.top4top.io/p_3902nzwgr1.jpg",
    ],
    title: "Getting Started with Azure IoT",
  },
  {
    id: 8,
    images: [
      "https://l.top4top.io/p_39023swc81.jpg",
    ],
    title: "Create a Virtual Private Cloud (VPC) Using AWS",
  },
  {
    id: 9,
    images: [
      "https://e.top4top.io/p_39024bzq31.jpg",
    ],
    title: "AWS S3 Basics",
  },
    {
    id: 8,
    images: [
      "https://i.top4top.io/p_3902axox01.jpg",
    ],
    title: "Create a Virtual Private Cloud (VPC) Using AWS",
  },
  {
    id: 9,
    images: [
      "https://a.top4top.io/p_3902rlbt11.jpg",
    ],
    title: "AWS S3 Basics",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Selalu mulai dari posisi paling atas
  // ketika halaman Certificates dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Membuka modal
  const handleOpen = (certificate) => {
    setSelected(certificate);
    setCurrentImage(0);
  };

  // Menutup modal
  const handleClose = () => {
    setSelected(null);
    setCurrentImage(0);
  };

  // Gambar berikutnya
  const handleNext = () => {
    if (!selected || selected.images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  // Gambar sebelumnya
  const handlePrevious = () => {
    if (!selected || selected.images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (!selected) return;

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

  return (
    <section
      id="certificates"
      className="
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-5
        bg-gradient-to-br
        from-[#0a0118]
        via-[#18002e]
        to-[#26006a]
        text-white
      "
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-6">

        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">
          <span
            className="
              inline-block
              px-3
              sm:px-4
              py-1
              rounded-full
              bg-purple-600/20
              text-purple-300
              border
              border-purple-500/30
              text-xs
              sm:text-sm
            "
          >
            Sertifikat
          </span>

          <h2
            className="
              mt-4
              sm:mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
            "
          >
            All Certificates
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              sm:mt-5
              max-w-2xl
              mx-auto
              text-xs
              sm:text-sm
              md:text-base
              leading-6
              sm:leading-7
            "
          >
            Explore all certificates obtained from training sessions,
            workshops, seminars, courses, and other professional activities.
          </p>
        </div>

        {/* =========================
            CERTIFICATE GRID
        ========================== */}
        <div
          className="
            grid
            grid-cols-3
            gap-2
            sm:gap-4
            md:gap-6
            lg:gap-8
            mt-12
            sm:mt-16
            lg:mt-20
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

        {/* =========================
            BACK BUTTON
        ========================== */}
        <div
          className="
            flex
            justify-center
            mt-10
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
              sm:gap-3
              px-5
              sm:px-6
              md:px-7
              py-3
              sm:py-3.5
              rounded-full
              border
              border-purple-400/40
              bg-purple-500/10
              text-white
              font-semibold
              text-xs
              sm:text-sm
              md:text-base
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-purple-500
              hover:border-purple-400
              hover:shadow-lg
              hover:shadow-purple-500/30
              hover:-translate-y-1
              active:scale-95
              whitespace-nowrap
            "
          >
            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            <span>Back to Certificate</span>
          </Link>
        </div>
      </div>

      {/* =========================
          IMAGE MODAL
      ========================== */}
      {selected && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-3
            sm:p-6
          "
          onClick={handleClose}
        >
          <div
            className="
              relative
              w-full
              max-w-6xl
              flex
              flex-col
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* =========================
                CLOSE BUTTON
            ========================== */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close image"
              className="
                absolute
                top-2
                right-2
                sm:top-4
                sm:right-4
                lg:top-6
                lg:right-6
                z-50
                text-white
                hover:text-purple-400
                transition
              "
            >
              <X
                size={32}
                className="sm:w-9 sm:h-9"
              />
            </button>

            {/* =========================
                IMAGE SLIDER
            ========================== */}
            <div
              className="
                relative
                w-full
                flex
                items-center
                justify-center
              "
            >

              {/* PREVIOUS BUTTON */}
              {selected.images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                  className="
                    absolute
                    left-1
                    sm:left-4
                    lg:left-8
                    z-20
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-black/60
                    border
                    border-white/10
                    text-white
                    text-lg
                    sm:text-xl
                    flex
                    items-center
                    justify-center
                    hover:bg-purple-600
                    hover:border-purple-400
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                >
                  ←
                </button>
              )}

              {/* CURRENT IMAGE */}
              <img
                src={selected.images[currentImage]}
                alt={`${selected.title} - ${currentImage + 1}`}
                className="
                  rounded-xl
                  sm:rounded-2xl
                  max-h-[75vh]
                  sm:max-h-[82vh]
                  lg:max-h-[88vh]
                  max-w-[90%]
                  sm:max-w-[88%]
                  lg:max-w-[85%]
                  w-auto
                  object-contain
                  shadow-2xl
                  transition-all
                  duration-300
                  select-none
                "
              />

              {/* NEXT BUTTON */}
              {selected.images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="
                    absolute
                    right-1
                    sm:right-4
                    lg:right-8
                    z-20
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-black/60
                    border
                    border-white/10
                    text-white
                    text-lg
                    sm:text-xl
                    flex
                    items-center
                    justify-center
                    hover:bg-purple-600
                    hover:border-purple-400
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                >
                  →
                </button>
              )}
            </div>

            {/* =========================
                IMAGE INDICATOR
            ========================== */}
            {selected.images.length > 1 && (
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-4
                  sm:mt-5
                "
              >
                {selected.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        currentImage === index
                          ? "w-6 h-2 bg-purple-500"
                          : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }
                    `}
                  />
                ))}
              </div>
            )}

            {/* =========================
                TITLE
            ========================== */}
            <p
              className="
                text-center
                mt-3
                sm:mt-4
                text-sm
                sm:text-lg
                text-gray-300
                font-medium
              "
            >
              {selected.title}
            </p>

            {/* =========================
                IMAGE COUNTER
            ========================== */}
            {selected.images.length > 1 && (
              <p
                className="
                  text-xs
                  sm:text-sm
                  text-gray-500
                  mt-1
                "
              >
                {currentImage + 1} / {selected.images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}