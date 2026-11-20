"use client";

import { useEffect, useRef } from "react";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function MyExperiences() {
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);

  const directionRef = useRef(1);

  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(0);

  // Kecepatan dibuat smooth ketika arah scroll berubah
  const velocityRef = useRef(1);

  // Sudut kemiringan saat ini
  const topSkewRef = useRef(0);
  const bottomSkewRef = useRef(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let animationFrame;
    let lastTime = performance.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll ke bawah
        directionRef.current = 1;
      } else if (currentScrollY < lastScrollY) {
        // Scroll ke atas
        directionRef.current = -1;
      }

      lastScrollY = currentScrollY;
    };

    const animateText = (currentTime) => {
      const delta = Math.min(currentTime - lastTime, 50);
      lastTime = currentTime;

      /*
        Target kecepatan:

        1  = bergerak ke kanan
        -1 = bergerak ke kiri
      */
      const targetVelocity = directionRef.current;

      /*
        Membuat perubahan arah smooth.
        Tidak langsung berubah 180 derajat.
      */
      velocityRef.current +=
        (targetVelocity - velocityRef.current) * 0.08;

      const velocity = velocityRef.current;

      /*
        Kecepatan dasar text.
      */
      const speed = 0.045 * delta;

      /*
        ================================
        POSISI TEXT
        ================================
      */

      // ATAS
      topPositionRef.current += speed * velocity;

      // BAWAH berlawanan arah
      bottomPositionRef.current -= speed * velocity;

      /*
        ================================
        LOOPING SEAMLESS
        ================================
      */

      const topTrack = topTrackRef.current;
      const bottomTrack = bottomTrackRef.current;

      /*
        ================================
        KEMIRINGAN TEXT
        ================================

        Scroll ke bawah:
        ATAS  -> kanan  -> -6deg
        BAWAH -> kiri   -> +6deg

        Scroll ke atas:
        ATAS  -> kiri   -> +6deg
        BAWAH -> kanan  -> -6deg
      */

      const topTargetSkew =
        directionRef.current === 1 ? -6 : 6;

      const bottomTargetSkew =
        directionRef.current === 1 ? 6 : -6;

      /*
        Smooth transition kemiringan.
      */
      topSkewRef.current +=
        (topTargetSkew - topSkewRef.current) * 0.08;

      bottomSkewRef.current +=
        (bottomTargetSkew - bottomSkewRef.current) * 0.08;

      /*
        ================================
        ATAS
        ================================
      */

      if (topTrack) {
        const halfWidth = topTrack.scrollWidth / 2;

        if (topPositionRef.current >= 0) {
          topPositionRef.current -= halfWidth;
        }

        if (topPositionRef.current <= -halfWidth) {
          topPositionRef.current += halfWidth;
        }

        topTrack.style.transform = `
          translate3d(
            ${topPositionRef.current}px,
            0,
            0
          )
          skewX(${topSkewRef.current}deg)
        `;
      }

      /*
        ================================
        BAWAH
        ================================
      */

      if (bottomTrack) {
        const halfWidth = bottomTrack.scrollWidth / 2;

        if (bottomPositionRef.current >= 0) {
          bottomPositionRef.current -= halfWidth;
        }

        if (bottomPositionRef.current <= -halfWidth) {
          bottomPositionRef.current += halfWidth;
        }

        bottomTrack.style.transform = `
          translate3d(
            ${bottomPositionRef.current}px,
            0,
            0
          )
          skewX(${bottomSkewRef.current}deg)
        `;
      }

      animationFrame = requestAnimationFrame(animateText);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animateText);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
        pt-0
        pb-0
      "
    >
      {/* =========================
          TEXT MARQUEE - ATAS
      ========================== */}
      <div className="experience-text-marquee">
        <div
          ref={topTrackRef}
          className="experience-text-track"
        >
          <div className="experience-text-group">
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
          </div>

          <div className="experience-text-group">
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* =========================
          EXPERIENCE CARDS
      ========================== */}
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
          <div className="experience-marquee-wrapper">
            <div
              className="
                experience-marquee
                flex
                w-max
                min-w-0
                gap-4
                overflow-visible
                sm:gap-5
              "
            >
              {/* SET PERTAMA */}
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`first-${experience.title}-${index}`}
                  experience={experience}
                />
              ))}

              {/* SET KEDUA */}
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`second-${experience.title}-${index}`}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          TEXT MARQUEE - BAWAH
      ========================== */}
      <div className="experience-text-marquee experience-text-bottom">
        <div
          ref={bottomTrackRef}
          className="experience-text-track"
        >
          <div className="experience-text-group">
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
          </div>

          <div className="experience-text-group">
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
            <span>MY EXPERIENCE</span>
          </div>
        </div>
      </div>

      <style>{`
        /* =========================================
           EXPERIENCE CARD MARQUEE
           TETAP SAMA
        ========================================== */

        .experience-marquee {
          animation: experience-scroll 45s linear infinite;
          will-change: transform;
        }

        .experience-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes experience-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1023px) {
          .experience-marquee {
            animation-duration: 65s;
          }
        }

        @media (max-width: 640px) {
          .experience-marquee {
            animation-duration: 80s;
          }
        }

        @media (max-width: 400px) {
          .experience-marquee {
            animation-duration: 90s;
          }
        }

        /* =========================================
           TEXT MARQUEE
        ========================================== */

        .experience-text-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          padding: 10px 0;
          margin: 0;
          z-index: 20;
        }

        .experience-text-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          transform-origin: center center;
        }

        .experience-text-group {
          display: flex;
          flex-shrink: 0;
          width: max-content;
        }

        .experience-text-track span {
          display: block;
          flex-shrink: 0;
          padding: 0 18px;
          color: #000000;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        /* =========================================
           TEXT BAWAH
        ========================================== */

        .experience-text-bottom {
          margin-top: 40px;
          margin-bottom: 0;
        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {
          .experience-text-marquee {
            padding: 9px 0;
          }

          .experience-text-track span {
            padding: 0 14px;
            font-size: 11px;
          }

          .experience-text-bottom {
            margin-top: 30px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .experience-marquee {
            animation: none;
          }

          .experience-text-track {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}