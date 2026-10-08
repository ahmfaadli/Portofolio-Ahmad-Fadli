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

  return (
    <section
      id="hero"
      className="
        min-h-screen
        bg-gradient-to-r
        from-[#4c1d95]
        via-[#6d28d9]
        to-[#7e22ce]
        flex
        items-center
        justify-center
        px-6
        sm:px-10
        lg:px-20
        xl:px-32
        py-10
        md:py-16
        text-white
        overflow-hidden
      "
    >
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? false : "show"}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          gap-10
          w-full
          max-w-7xl
        "
      >
        {/* Konten */}
        <div
          className="
            space-y-6
            order-2
            md:order-1
            text-center
            md:text-left
          "
        >
          <motion.h1
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Hi, Saya
            <br />
            Ahmad Fadli
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="
              max-w-xl
              mx-auto
              md:mx-0
              leading-relaxed
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
              sm:flex-row
              gap-4
              justify-center
              md:justify-start
              pt-4
            "
          >
            <Button href="/assets/CV-Ahmad Fadli-IT.pdf">
              Download CV <i className="ri-download-line ri-lg"></i>
            </Button>

            <Button href="#skills" variant="outline">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </Button>
          </motion.div>
        </div>

        {/* Gambar */}
        <motion.div
          variants={shouldReduceMotion ? undefined : imageAnimation}
          className="
            flex
            justify-center
            md:justify-end
            order-1
            md:order-2
            translate-y-4
            md:translate-y-0
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
              sm:w-[400px]
              lg:w-[480px]
              xl:w-[520px]
              object-contain
              drop-shadow-2xl
              select-none
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}