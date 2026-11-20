"use client";

import { useEffect, useRef } from "react";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function MyExperiences() {
  const sectionRef = useRef(null);

  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const experienceMarqueeRef = useRef(null);

  const directionRef = useRef(1);

  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(0);

  const velocityRef = useRef(1);

  const topSkewRef = useRef(0);
  const bottomSkewRef = useRef(0);

  /*
    =========================================
    TRACK WIDTH CACHE
    =========================================

    scrollWidth tidak lagi dibaca setiap frame.
    Nilainya hanya diperbarui ketika ukuran
    track berubah.
  */

  const topHalfWidthRef = useRef(0);
  const bottomHalfWidthRef = useRef(0);
  const mobileHalfWidthRef = useRef(0);

  /*
    =========================================
    MOBILE CARD DRAG
    =========================================
  */

  const mobilePositionRef = useRef(0);
  const mobileAnimationFrameRef = useRef(null);

  const touchStartXRef = useRef(0);
  const touchStartPositionRef = useRef(0);

  const isTouchingRef = useRef(false);
  const isDraggingRef = useRef(false);

  /*
    =========================================
    ANIMATION STATE
    =========================================
  */

  const isVisibleRef = useRef(true);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    /*
      =========================================
      MEDIA QUERY
      =========================================
    */

    const mobileQuery = window.matchMedia(
      "(max-width: 640px)"
    );

    const updateMobileState = () => {
      isMobileRef.current = mobileQuery.matches;
    };

    updateMobileState();

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener(
        "change",
        updateMobileState
      );
    } else {
      mobileQuery.addListener(updateMobileState);
    }

    /*
      =========================================
      TRACK WIDTH
      =========================================

      Hanya membaca scrollWidth ketika diperlukan.
    */

    const updateTrackWidths = () => {
      const topTrack = topTrackRef.current;
      const bottomTrack = bottomTrackRef.current;
      const mobileTrack =
        experienceMarqueeRef.current;

      if (topTrack) {
        topHalfWidthRef.current =
          topTrack.scrollWidth / 2;
      }

      if (bottomTrack) {
        bottomHalfWidthRef.current =
          bottomTrack.scrollWidth / 2;
      }

      if (mobileTrack) {
        mobileHalfWidthRef.current =
          mobileTrack.scrollWidth / 2;
      }
    };

    /*
      =========================================
      INITIAL MEASUREMENT
      =========================================
    */

    updateTrackWidths();

    /*
      =========================================
      RESIZE OBSERVER
      =========================================

      Tidak perlu menghitung ukuran setiap frame.
      Hanya dihitung ketika ukuran elemen berubah.
    */

    let resizeObserver = null;

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        updateTrackWidths();
      });

      if (topTrackRef.current) {
        resizeObserver.observe(topTrackRef.current);
      }

      if (bottomTrackRef.current) {
        resizeObserver.observe(bottomTrackRef.current);
      }

      if (experienceMarqueeRef.current) {
        resizeObserver.observe(
          experienceMarqueeRef.current
        );
      }
    } else {
      window.addEventListener(
        "resize",
        updateTrackWidths,
        { passive: true }
      );
    }

    /*
      =========================================
      INTERSECTION OBSERVER
      =========================================

      Animasi tidak perlu berjalan ketika
      section sedang jauh dari viewport.
    */

    let intersectionObserver = null;

    if ("IntersectionObserver" in window) {
      intersectionObserver =
        new IntersectionObserver(
          (entries) => {
            const entry = entries[0];

            isVisibleRef.current =
              entry.isIntersecting;
          },
          {
            threshold: 0.01,
          }
        );

      intersectionObserver.observe(section);
    }

    /*
      =========================================
      SCROLL DIRECTION
      =========================================
    */

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        directionRef.current = 1;
      } else if (currentScrollY < lastScrollY) {
        directionRef.current = -1;
      }

      lastScrollY = currentScrollY;
    };

    /*
      =========================================
      TEXT MARQUEE ANIMATION
      =========================================
    */

    let animationFrame = null;
    let lastTime = performance.now();

    const animateText = (currentTime) => {
      /*
        Kalau section tidak terlihat,
        jangan melakukan pekerjaan animasi.
      */

      if (!isVisibleRef.current) {
        lastTime = currentTime;

        animationFrame =
          requestAnimationFrame(animateText);

        return;
      }

      const delta = Math.min(
        currentTime - lastTime,
        50
      );

      lastTime = currentTime;

      /*
        =========================================
        SMOOTH DIRECTION
        =========================================
      */

      const targetVelocity =
        directionRef.current;

      velocityRef.current +=
        (targetVelocity -
          velocityRef.current) *
        0.08;

      const velocity =
        velocityRef.current;

      const speed = 0.045 * delta;

      /*
        =========================================
        POSISI TEXT ATAS
        =========================================
      */

      topPositionRef.current +=
        speed * velocity;

      /*
        =========================================
        POSISI TEXT BAWAH
        =========================================
      */

      bottomPositionRef.current -=
        speed * velocity;

      /*
        =========================================
        SKEW
        =========================================
      */

      const topTargetSkew =
        directionRef.current === 1
          ? -6
          : 6;

      const bottomTargetSkew =
        directionRef.current === 1
          ? 6
          : -6;

      topSkewRef.current +=
        (topTargetSkew -
          topSkewRef.current) *
        0.08;

      bottomSkewRef.current +=
        (bottomTargetSkew -
          bottomSkewRef.current) *
        0.08;

      /*
        =========================================
        ATAS
        =========================================
      */

      const topTrack =
        topTrackRef.current;

      const topHalfWidth =
        topHalfWidthRef.current;

      if (
        topTrack &&
        topHalfWidth > 0
      ) {
        if (
          topPositionRef.current >=
          0
        ) {
          topPositionRef.current -=
            topHalfWidth;
        }

        if (
          topPositionRef.current <=
          -topHalfWidth
        ) {
          topPositionRef.current +=
            topHalfWidth;
        }

        topTrack.style.transform =
          `translate3d(${topPositionRef.current}px, 0, 0) skewX(${topSkewRef.current}deg)`;
      }

      /*
        =========================================
        BAWAH
        =========================================
      */

      const bottomTrack =
        bottomTrackRef.current;

      const bottomHalfWidth =
        bottomHalfWidthRef.current;

      if (
        bottomTrack &&
        bottomHalfWidth > 0
      ) {
        if (
          bottomPositionRef.current >=
          0
        ) {
          bottomPositionRef.current -=
            bottomHalfWidth;
        }

        if (
          bottomPositionRef.current <=
          -bottomHalfWidth
        ) {
          bottomPositionRef.current +=
            bottomHalfWidth;
        }

        bottomTrack.style.transform =
          `translate3d(${bottomPositionRef.current}px, 0, 0) skewX(${bottomSkewRef.current}deg)`;
      }

      animationFrame =
        requestAnimationFrame(
          animateText
        );
    };

    /*
      =========================================
      MOBILE CARD ANIMATION
      =========================================
    */

    const animateMobileCards = (
      currentTime
    ) => {
      /*
        Jika bukan mobile, tidak perlu
        menjalankan animasi mobile.
      */

      if (!isMobileRef.current) {
        mobileAnimationFrameRef.current =
          null;

        return;
      }

      /*
        Jika section tidak terlihat,
        hentikan sementara pekerjaan.
      */

      if (!isVisibleRef.current) {
        mobileAnimationFrameRef.current =
          requestAnimationFrame(
            animateMobileCards
          );

        return;
      }

      const track =
        experienceMarqueeRef.current;

      /*
        Ketika sedang disentuh,
        animasi otomatis berhenti.
      */

      if (
        !track ||
        isTouchingRef.current
      ) {
        mobileAnimationFrameRef.current =
          requestAnimationFrame(
            animateMobileCards
          );

        return;
      }

      const previousTime =
        animateMobileCards.lastTime ||
        currentTime;

      const delta = Math.min(
        currentTime - previousTime,
        50
      );

      animateMobileCards.lastTime =
        currentTime;

      const halfWidth =
        mobileHalfWidthRef.current;

      if (halfWidth <= 0) {
        mobileAnimationFrameRef.current =
          requestAnimationFrame(
            animateMobileCards
          );

        return;
      }

      /*
        Kecepatan tetap mempertahankan
        feel animasi sebelumnya.
      */

      const speed =
        (halfWidth / 80000) *
        delta;

      mobilePositionRef.current -=
        speed;

      /*
        Loop seamless.
      */

      if (
        mobilePositionRef.current <=
        -halfWidth
      ) {
        mobilePositionRef.current +=
          halfWidth;
      }

      track.style.transform =
        `translate3d(${mobilePositionRef.current}px, 0, 0)`;

      mobileAnimationFrameRef.current =
        requestAnimationFrame(
          animateMobileCards
        );
    };

    /*
      =========================================
      TOUCH START
      =========================================
    */

    const handleTouchStart = (event) => {
      if (!isMobileRef.current) {
        return;
      }

      const track =
        experienceMarqueeRef.current;

      if (!track) return;

      const touch =
        event.touches[0];

      if (!touch) return;

      isTouchingRef.current = true;
      isDraggingRef.current = false;

      touchStartXRef.current =
        touch.clientX;

      touchStartPositionRef.current =
        mobilePositionRef.current;
    };

    /*
      =========================================
      TOUCH MOVE
      =========================================
    */

    const handleTouchMove = (event) => {
      if (
        !isMobileRef.current ||
        !isTouchingRef.current
      ) {
        return;
      }

      const track =
        experienceMarqueeRef.current;

      if (!track) return;

      const touch =
        event.touches[0];

      if (!touch) return;

      const deltaX =
        touch.clientX -
        touchStartXRef.current;

      /*
        Mulai dianggap drag setelah
        melewati threshold kecil.
      */

      if (Math.abs(deltaX) > 3) {
        isDraggingRef.current = true;
      }

      if (!isDraggingRef.current) {
        return;
      }

      /*
        Mencegah browser menggeser
        halaman secara horizontal.
      */

      event.preventDefault();

      const halfWidth =
        mobileHalfWidthRef.current;

      if (halfWidth <= 0) {
        return;
      }

      let newPosition =
        touchStartPositionRef.current +
        deltaX;

      /*
        Normalisasi posisi agar
        loop tetap seamless.
      */

      if (newPosition > 0) {
        newPosition =
          -(
            halfWidth -
            (newPosition % halfWidth)
          );
      }

      if (
        newPosition <=
        -halfWidth
      ) {
        newPosition =
          newPosition % halfWidth;
      }

      mobilePositionRef.current =
        newPosition;

      track.style.transform =
        `translate3d(${newPosition}px, 0, 0)`;
    };

    /*
      =========================================
      TOUCH END
      =========================================
    */

    const handleTouchEnd = () => {
      if (!isMobileRef.current) {
        return;
      }

      const track =
        experienceMarqueeRef.current;

      isTouchingRef.current = false;
      isDraggingRef.current = false;

      if (!track) return;

      /*
        Setelah jari dilepas,
        requestAnimationFrame mobile
        akan melanjutkan gerakan normal.
      */

      if (
        mobileAnimationFrameRef.current ===
        null
      ) {
        mobileAnimationFrameRef.current =
          requestAnimationFrame(
            animateMobileCards
          );
      }
    };

    /*
      =========================================
      EVENT LISTENER
      =========================================
    */

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    const track =
      experienceMarqueeRef.current;

    if (track && isMobileRef.current) {
      track.addEventListener(
        "touchstart",
        handleTouchStart,
        {
          passive: true,
        }
      );

      track.addEventListener(
        "touchmove",
        handleTouchMove,
        {
          passive: false,
        }
      );

      track.addEventListener(
        "touchend",
        handleTouchEnd,
        {
          passive: true,
        }
      );

      track.addEventListener(
        "touchcancel",
        handleTouchEnd,
        {
          passive: true,
        }
      );

      mobileAnimationFrameRef.current =
        requestAnimationFrame(
          animateMobileCards
        );
    }

    /*
      Text animation tetap berjalan
      seperti sebelumnya.
    */

    animationFrame =
      requestAnimationFrame(
        animateText
      );

    /*
      =========================================
      CLEANUP
      =========================================
    */

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener(
          "change",
          updateMobileState
        );
      } else {
        mobileQuery.removeListener(
          updateMobileState
        );
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener(
          "resize",
          updateTrackWidths
        );
      }

      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      if (
        mobileAnimationFrameRef.current
      ) {
        cancelAnimationFrame(
          mobileAnimationFrameRef.current
        );

        mobileAnimationFrameRef.current =
          null;
      }

      if (track) {
        track.removeEventListener(
          "touchstart",
          handleTouchStart
        );

        track.removeEventListener(
          "touchmove",
          handleTouchMove
        );

        track.removeEventListener(
          "touchend",
          handleTouchEnd
        );

        track.removeEventListener(
          "touchcancel",
          handleTouchEnd
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
              ref={experienceMarqueeRef}
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

              {experiences.map(
                (experience, index) => (
                  <ExperienceCard
                    key={`first-${experience.title}-${index}`}
                    experience={experience}
                  />
                )
              )}

              {/* SET KEDUA */}

              {experiences.map(
                (experience, index) => (
                  <ExperienceCard
                    key={`second-${experience.title}-${index}`}
                    experience={experience}
                  />
                )
              )}
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
           DESKTOP TETAP SAMA
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

        /*
          =========================================
          MOBILE
          =========================================

          CSS animation dimatikan karena pada mobile
          gerakan dikontrol JavaScript agar touch drag
          bisa bekerja dengan lancar.
        */

        @media (max-width: 640px) {
          .experience-marquee {
            animation: none;
            animation-play-state: paused;
            touch-action: pan-y;
            user-select: none;
            -webkit-user-select: none;
            -webkit-touch-callout: none;
            will-change: transform;
          }
        }

        @media (max-width: 400px) {
          .experience-marquee {
            animation: none;
            animation-play-state: paused;
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
           MOBILE TEXT
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