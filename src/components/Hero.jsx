import Button from "./Button";
import HeroImage from "../assets/hero-img.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#7e22ce] flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32 py-10 md:py-16 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-7xl">
        {/* KIRI */}
        <div className="space-y-6 order-2 md:order-1 text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hi, Saya
            <br />
            Ahmad Fadli
          </h1>

          <p className="max-w-xl mx-auto md:mx-0">
            An individual who has an interest in the development and creation of
            valuable digital works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button href="./assets/CV Ahmad Fadli_IDN.pdf">
              Download CV <i className="ri-download-line ri-lg"></i>
            </Button>

            <Button href="#projects" variant="outline">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </Button>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
  <img
    src={HeroImage}
    alt="Hero"
    className="w-[320px] sm:w-[400px] lg:w-[480px] xl:w-[520px] object-contain drop-shadow-2xl"
  />
</div>
      </div>
    </section>
  );
}