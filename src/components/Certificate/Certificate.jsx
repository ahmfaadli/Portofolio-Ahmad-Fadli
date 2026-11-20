"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

import CertificateCard from "./CertificateCard";

import {
  certificates,
  categories,
  INITIAL_VISIBLE,
  allCategoryPriority,
} from "../../data/Certificates";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter kategori tetap berdasarkan category masing-masing.
  const filteredCertificates = useMemo(() => {
    if (activeCategory === "all") {
      const priorityMap = new Map(
        allCategoryPriority.map((title, index) => [title, index])
      );

      return [...certificates].sort((a, b) => {
        const indexA = priorityMap.has(a.title)
          ? priorityMap.get(a.title)
          : Infinity;

        const indexB = priorityMap.has(b.title)
          ? priorityMap.get(b.title)
          : Infinity;

        // Sertifikat prioritas berada di urutan pertama.
        if (indexA !== indexB) {
          return indexA - indexB;
        }

        // Sertifikat lainnya mempertahankan urutan data aslinya.
        return certificates.indexOf(a) - certificates.indexOf(b);
      });
    }

    return certificates.filter(
      (certificate) =>
        certificate.category.trim().toLowerCase() === activeCategory
    );
  }, [activeCategory]);

  // Batasi jumlah sertifikat yang ditampilkan sebelum Show More.
  const visibleCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, INITIAL_VISIBLE);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  const handleOpen = (certificate) => {
    setSelected(certificate);
    setCurrentImage(0);
  };

  const handleClose = () => {
    setSelected(null);
    setCurrentImage(0);
  };

  const handleNext = () => {
    if (!selected || selected.images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    if (!selected || selected.images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, currentImage]);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
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

        {/* Category Filter */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3"
          role="group"
          aria-label="Filter certificates by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                aria-pressed={isActive}
                className={`
                  cursor-pointer
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  sm:px-6
                  sm:py-3
                  sm:text-sm
                  ${
                    isActive
                      ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "border-blue-400/30 bg-white/[0.03] text-gray-300 hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-white"
                  }
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Certificate Grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
            sm:mt-10
            sm:grid-cols-3
            sm:gap-4
            md:gap-6
            lg:mt-12
            lg:gap-8
          "
        >
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard
              key={`${certificate.category}-${certificate.title}-${certificate.images[0]}-${index}`}
              image={certificate.images[0]}
              title={certificate.title}
              onClick={() => handleOpen(certificate)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-12 text-center">
            <p className="text-sm text-gray-300">
              Belum ada sertifikat pada kategori ini.
            </p>
          </div>
        )}

        {/* Show More / Show Less */}
        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="
              group
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-full
              border
              border-blue-400/40
              bg-blue-500/10
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400
              hover:bg-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/30
              active:scale-95
              sm:gap-3
              sm:px-6
              sm:py-3.5
              sm:text-sm
              md:px-7
              md:text-base
            "
          >
            <span>
              {showAll ? "Show Less Certificates" : "Show More Certificates"}
            </span>

            {showAll ? (
              <ChevronUp
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            ) : (
              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            )}
          </button>
        </div>
      </div>

      {/* Certificate Image Modal */}
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
                cursor-pointer
                text-white
                transition-colors
                hover:text-blue-400
                sm:right-4
                sm:top-4
                lg:right-6
                lg:top-6
              "
            >
              <X size={32} className="sm:h-9 sm:w-9" />
            </button>

            {/* Image Slider */}
            <div className="relative flex w-full items-center justify-center">
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
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-lg
                    text-white
                    transition-colors
                    hover:border-blue-400
                    hover:bg-blue-600
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
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-lg
                    text-white
                    transition-colors
                    hover:border-blue-400
                    hover:bg-blue-600
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

            {/* Image Indicators */}
            {selected.images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
                {selected.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    aria-current={
                      currentImage === index ? "true" : undefined
                    }
                    className={
                      currentImage === index
                        ? "h-2 w-6 cursor-pointer rounded-full bg-blue-500"
                        : "h-2 w-2 cursor-pointer rounded-full bg-white/40 transition-colors hover:bg-white/70"
                    }
                  />
                ))}
              </div>
            )}

            {/* Certificate Title */}
            <p className="mt-3 text-center text-sm font-medium text-gray-300 sm:mt-4 sm:text-lg">
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