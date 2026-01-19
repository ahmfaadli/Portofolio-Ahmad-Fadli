import Dataimage from "../data";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#7e22ce] flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32 py-10 md:py-16 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-7xl">
        {/* KIRI */}
        <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="flex items-center bg-[#1f1f1f]/80 px-4 py-2 rounded-xl w-fit mx-auto md:mx-0">
            {/* <img src={Dataimage.ProfileImage} className="w-9 h-9 rounded-md mr-2" /> */}
            <p>“Kode yang indah, lahir dari ketekunan. 😁”</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hi, Saya Ahmad Fadli
          </h1>
          {/* <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
            UI/UX Designer
          </h2> */}

          <p className="max-w-xl mx-auto md:mx-0">
            Crafting exceptional digital experiences with modern web
            technologies. Specialized in MERN stack.
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
          {/* <img
            src={Dataimage.HeroImage}
            className="w-[420px] rounded-[30px] drop-shadow-2xl" */}
          />
        </div>
      </div>
    </section>
  );
}
