import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#090014] border-t border-white/10">
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          md:px-6
          lg:px-8
          py-6
          sm:py-7
          md:py-8
          lg:py-10
        "
      >
        {/* MAIN */}
        <div
          className="
            grid
            grid-cols-3
            gap-4
            sm:gap-6
            md:gap-8
            lg:gap-12
          "
        >
          {/* BRAND */}
          <div>
            <h2
              className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                font-bold
                text-white
              "
            >
              Ahmad Fadli
            </h2>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3
              className="
                text-sm
                sm:text-base
                md:text-lg
                font-semibold
                text-white
                mb-3
                sm:mb-4
              "
            >
              Navigation
            </h3>

            <ul
              className="
                space-y-1.5
                sm:space-y-2
                text-gray-400
                text-xs
                sm:text-sm
              "
            >
              <li>
                <a
                  href="#Hero"
                  className="hover:text-purple-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#About"
                  className="hover:text-purple-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#Education"
                  className="hover:text-purple-400 transition"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#Work"
                  className="hover:text-purple-400 transition"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#Skill"
                  className="hover:text-purple-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#Certificates"
                  className="hover:text-purple-400 transition"
                >
                  Certificates
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                text-sm
                sm:text-base
                md:text-lg
                font-semibold
                text-white
                mb-3
                sm:mb-4
              "
            >
              Contact
            </h3>

            <div
              className="
                text-gray-400
                text-xs
                sm:text-sm
                space-y-1.5
                sm:space-y-2
              "
            >
              <p>📍 Bogor, Indonesia</p>

              <p className="break-words">
                📧 ahmadfaadli05@gmail.com
              </p>

              <p>📱 +62 8569 3757 693</p>
            </div>

            {/* SOCIAL MEDIA
                HILANG DI HP
                MUNCUL TABLET + DESKTOP
            */}
            <div
              className="
                hidden
                sm:flex
                flex-wrap
                gap-2
                md:gap-2.5
                lg:gap-3
                mt-4
                md:mt-5
              "
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  lg:w-10
                  lg:h-10
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-xs
                  md:text-sm
                  hover:bg-purple-600
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  lg:w-10
                  lg:h-10
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-xs
                  md:text-sm
                  hover:bg-purple-600
                  transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  lg:w-10
                  lg:h-10
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-xs
                  md:text-sm
                  hover:bg-purple-600
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:email@gmail.com"
                className="
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  lg:w-10
                  lg:h-10
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-xs
                  md:text-sm
                  hover:bg-purple-600
                  transition
                "
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noreferrer"
                className="
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  lg:w-10
                  lg:h-10
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-xs
                  md:text-sm
                  hover:bg-purple-600
                  transition
                "
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10
            mt-6
            sm:mt-7
            md:mt-8
            pt-4
            sm:pt-5
            flex
            justify-center
            items-center
            text-center
          "
        >
          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
            © {year} Ahmad Fadli. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}