import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarIntro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 600); // tunggu animasi exit
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* STAR BACKGROUND */}
          <div className="absolute inset-0 star-bg"></div>

          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

          {/* TEXT */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wide glow-text">
              Ahmad Fadli
            </h1>

            <motion.p
              className="mt-3 text-gray-300 tracking-widest text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Creative Developer
            </motion.p>
          </motion.div>

          {/* ZOOM OUT EFFECT */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
