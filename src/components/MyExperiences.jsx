"use client";

import React, { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { experiences } from "../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function MyExperiences() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // =========================
  // GET CARD SCROLL AMOUNT
  // =========================
  const getScrollAmount = () => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const card = slider.querySelector(
      "[data-experience-card]"
    );

    if (!card) return 0;

    const cardWidth =
      card.getBoundingClientRect().width;

    const styles = window.getComputedStyle(slider);

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      0;

    return cardWidth + gap;
  };

  // =========================
  // SCROLL LEFT / RIGHT
  // =========================
  const scroll = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollAmount = getScrollAmount();

    if (!scrollAmount) return;

    slider.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  // =========================
  // HANDLE CAROUSEL SCROLL
  // =========================
  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollAmount = getScrollAmount();

    if (!scrollAmount) return;

    const index = Math.round(
      slider.scrollLeft / scrollAmount
    );

    const newIndex = Math.max(
      0,
      Math.min(
        index,
        experiences.length - 1
      )
    );

    setActiveIndex(newIndex);
  };

  // =========================
  // GO TO SPECIFIC SLIDE
  // =========================
  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollAmount = getScrollAmount();

    if (!scrollAmount) return;

    slider.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section
      id="my-experiences"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#0a0118]
        via-[#18002e]
        to-[#26006a]

        py-16

        sm:py-20

        md:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl

          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">
          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              leading-tight
              text-white

              sm:text-5xl

              lg:text-6xl

              max-[374px]:mt-4
              max-[374px]:text-[29px]
              max-[374px]:leading-[1.15]
            "
          >
            My Experiences
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-7
              text-gray-400

              max-lg:mt-5
              max-lg:max-w-2xl
              max-lg:text-base

              max-md:mt-4
              max-md:max-w-xl
              max-md:text-sm
              max-md:leading-6

              max-[374px]:mt-3
              max-[374px]:text-[13px]
              max-[374px]:leading-5
            "
          >
            A collection of experiences, activities,
            and projects that shaped my journey
          </p>
        </div>

        {/* =========================
            CAROUSEL WRAPPER
        ========================== */}
        <div
          className="
            relative
            mt-10
            w-full
            min-w-0

            sm:mt-12

            md:mt-14
          "
        >
          {/* =========================
              DESKTOP ARROWS
          ========================== */}
          <button
            type="button"
            aria-label="Previous experience"
            onClick={() => scroll("left")}
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#120021]/90
              text-white
              shadow-lg
              backdrop-blur-md

              transition-all
              duration-300

              hover:border-purple-400/30
              hover:bg-purple-600
              hover:text-white

              active:scale-95

              lg:flex
            "
          >
            <ChevronLeft
              size={20}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Next experience"
            onClick={() => scroll("right")}
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#120021]/90
              text-white
              shadow-lg
              backdrop-blur-md

              transition-all
              duration-300

              hover:border-purple-400/30
              hover:bg-purple-600
              hover:text-white

              active:scale-95

              lg:flex
            "
          >
            <ChevronRight
              size={20}
              strokeWidth={1.8}
            />
          </button>

          {/* =========================
              CAROUSEL
          ========================== */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex
              w-full
              min-w-0
              gap-4
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              snap-x
              snap-mandatory
              pb-4

              sm:gap-5

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              touch-pan-x
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {experiences.map(
              (experience, index) => (
                <ExperienceCard
                  key={`${experience.title}-${index}`}
                  experience={experience}
                />
              )
            )}
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET HINT
        ========================== */}
        <div
          className="
            mt-1
            flex
            justify-center

            lg:hidden
          "
        >
          <p
            className="
              text-[11px]
              text-purple-100/40

              sm:text-xs
            "
          >
            Geser untuk melihat pengalaman lainnya
          </p>
        </div>

        {/* =========================
            DESKTOP INDICATOR
        ========================== */}
        <div
          className="
            mt-6
            hidden
            items-center
            justify-center
            gap-2

            lg:flex
          "
        >
          {experiences.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to experience ${
                index + 1
              }`}
              onClick={() => goToSlide(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? "w-7 bg-purple-400"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}