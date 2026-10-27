import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tombol muncul setelah melewati bagian Hero.
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Kembali ke bagian atas"
      title="Kembali ke atas"
      className="
        fixed
        bottom-6
        right-6
        z-40
        flex
        h-10
        w-10
        cursor-pointer
        items-center
        justify-center
        rounded-full
        border
        border-purple-400/30
        bg-purple-600
        text-white
        shadow-lg
        shadow-purple-900/30
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-purple-500
        active:scale-95
        sm:bottom-8
        sm:right-8
        sm:h-11
        sm:w-11
      "
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}