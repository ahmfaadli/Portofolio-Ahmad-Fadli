import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarIntro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      // Tunggu animasi exit selesai
      setTimeout(() => {
        onFinish?.();
      }, 700);
    }, 2600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            overflow-hidden
            bg-[#160B2E]
          "
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =========================
              BACKGROUND GRADIENT
          ========================== */}
          <motion.div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[#160B2E]
              via-[#4C1D95]
              to-[#7E22CE]
            "
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 3,
              ease: "easeOut",
            }}
          />

          {/* =========================
              SOFT GLOW - TOP RIGHT
          ========================== */}
          <motion.div
            className="
              absolute
              -right-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-[#A855F7]/20
              blur-3xl
            "
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />

          {/* =========================
              SOFT GLOW - BOTTOM LEFT
          ========================== */}
          <motion.div
            className="
              absolute
              -bottom-40
              -left-32
              h-96
              w-96
              rounded-full
              bg-[#22D3EE]/10
              blur-3xl
            "
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          {/* =========================
              SUBTLE GRID
          ========================== */}
          <div
            className="
              absolute inset-0
              opacity-[0.05]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          {/* =========================
              CENTER CONTENT
          ========================== */}
          <motion.div
            className="
              relative z-10
              flex
              flex-col
              items-center
              px-6
              text-center
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Name */}
            <motion.h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
              "
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ahmad Fadli
            </motion.h1>

            {/* Accent line */}
            <motion.div
              className="
                mt-5
                h-[2px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-cyan-300
                to-transparent
              "
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "120px",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              }}
            />

            {/* Subtitle */}
            <motion.p
              className="
                mt-4
                text-sm
                font-medium
                tracking-[0.18em]
                text-white/60
                sm:text-base
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.95,
              }}
            >
              INFORMATICS ENGINEERING
            </motion.p>
          </motion.div>

          {/* =========================
              BOTTOM TEXT
          ========================== */}
          <motion.div
            className="
              absolute
              bottom-8
              left-0
              right-0
              text-center
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
          >
            <p className="text-xs text-white/40">
              Creating useful digital experiences
            </p>
          </motion.div>

          {/* =========================
              EXIT LIGHT
          ========================== */}
          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-white
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0.08, 0],
            }}
            transition={{
              duration: 2.6,
              times: [0, 0.7, 0.9, 1],
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}