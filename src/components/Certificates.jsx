import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CertificateCard from "./CertificateCard";

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
    id: 3,
    images: [
      "/assets/certificates/toefl.webp",
    ],
    title: "Sertifikat TOEFL",
  },
  {
    id: 4,
    images: [
      "https://l.top4top.io/p_3876y1ct01.jpg",
    ],
    title: "Kepala Departemen TEKPORA",
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
    title: "Getting started with Azure IOT",
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      id="certificates"
      className="
        bg-gradient-to-br
        from-[#0a0118]
        via-[#18002e]
        to-[#26006a]
        px-4
        pt-20
        pb-20
        max-lg:pt-16
        max-lg:pb-16
        max-md:pt-14
        max-md:pb-14
        max-sm:pt-12
        max-sm:pb-12
        max-[374px]:pt-10
        max-[374px]:pb-10
        sm:px-5
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
              text-white
              sm:mt-5
              sm:text-4xl
              md:text-5xl
            "
          >
            My Certificates
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
            A collection of certificates obtained from various training
            sessions, workshops, seminars, and other activities.
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

        {/* Show More */}
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
            to="/certificates"
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
            <span>Show More Certificates</span>

            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
                sm:text-lg
                md:text-xl
              "
            >
              →
            </span>
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
            {/* Close Button */}
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

            {/* Image Slider */}
            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center
              "
            >
              {/* Previous Button */}
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

              {/* Current Image */}
              <img
                src={selected.images[currentImage]}
                alt={`${selected.title} - ${currentImage + 1}`}
                decoding="async"
                width="1600"
                height="1200"
                className="
                  max-h-[75vh]
                  max-w-[90%]
                  select-none
                  rounded-xl
                  object-contain
                  shadow-2xl
                  sm:max-h-[82vh]
                  sm:max-w-[88%]
                  sm:rounded-2xl
                  lg:max-h-[88vh]
                  lg:max-w-[85%]
                "
              />

              {/* Next Button */}
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

            {/* Image Indicator */}
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

            {/* Image Counter */}
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