import { motion, useReducedMotion } from "framer-motion";
import Button from "./Button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    x: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleProjectsClick = (event) => {
    const skillsSection = document.getElementById("skills");

    if (!skillsSection) return;

    event.preventDefault();

    skillsSection.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-r
        from-[#4c1d95]
        via-[#6d28d9]
        to-[#7e22ce]
        px-6
        py-10
        text-white
        sm:px-10
        lg:px-20
        xl:px-32
        md:py-16
      "
    >
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? false : "show"}
        className="
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          md:grid-cols-2
        "
      >
        {/* Konten */}
        <div
          className="
            order-2
            space-y-6
            text-center
            md:order-1
            md:text-left
          "
        >
          <motion.h1
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Hi, Saya
            <br />
            Ahmad Fadli
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="
              mx-auto
              max-w-xl
              leading-relaxed
              md:mx-0
            "
          >
            An individual who has an interest in the development and creation
            of valuable digital works.
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="
              flex
              flex-col
              justify-center
              gap-4
              pt-4
              sm:flex-row
              md:justify-start
            "
          >
            {/* Tombol Lihat CV */}
            <Button
              href="https://drive.google.com/file/d/1AikjCV3rMnUGEnr6IvNTcq9xaqBbd-7_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat CV{" "}
              <i
                className="ri-external-link-line ri-lg"
                aria-hidden="true"
              />
            </Button>

            {/* Tombol Lihat Proyek */}
            <Button
              href="#skills"
              variant="outline"
              onClick={handleProjectsClick}
            >
              Lihat Proyek{" "}
              <i
                className="ri-arrow-down-line ri-lg"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </div>

        {/* Gambar */}
        <motion.div
          variants={shouldReduceMotion ? undefined : imageAnimation}
          className="
            order-1
            flex
            translate-y-4
            justify-center
            md:order-2
            md:translate-y-0
            md:justify-end
          "
        >
          <img
            src="/assets/Hero-img.webp"
            alt="Ahmad Fadli"
            width="520"
            height="520"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="
              w-[320px]
              select-none
              object-contain
              drop-shadow-2xl
              sm:w-[400px]
              lg:w-[480px]
              xl:w-[520px]
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}