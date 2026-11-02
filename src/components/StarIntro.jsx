import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const INTRO_DURATION = 1400;
const EASING = [0.22, 1, 0.36, 1];

export default function StarIntro({ onFinish }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrame;
    let finishTimer;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(
        Math.round((elapsed / INTRO_DURATION) * 100),
        100
      );

      setProgress((previous) =>
        previous === nextProgress ? previous : nextProgress
      );

      if (elapsed < INTRO_DURATION) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    finishTimer = setTimeout(() => {
      setProgress(100);
      setShow(false);
    }, INTRO_DURATION);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {show && (
        <motion.div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#160B2E]
          "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.45,
            ease: EASING,
          }}
        >
          {/* Background */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#160B2E]
              via-[#4C1D95]
              to-[#7E22CE]
            "
          />

          {/* Soft Glow */}
          <div
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
          />

          <div
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
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          {/* Content */}
          <motion.div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              px-6
              text-center
            "
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: EASING,
            }}
          >
            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
              "
            >
              Ahmad Fadli
            </h1>

            {/* Loading Percentage */}
            <motion.p
              className="
                mt-5
                text-sm
                font-semibold
                tabular-nums
                tracking-[0.18em]
                text-white/70
                sm:text-base
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
            >
              {progress}%
            </motion.p>
          </motion.div>

          {/* Bottom Text */}
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
              delay: 0.3,
              duration: 0.35,
            }}
          >
            <p className="text-xs text-white/40">
              Creating useful digital experiences
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}