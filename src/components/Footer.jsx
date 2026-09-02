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
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Ahmad Fadli
            </h2>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-purple-400 transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-purple-400 transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-purple-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#certificates" className="hover:text-purple-400 transition">
                  Certificates
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              📍 Bogor, Indonesia
            </p>

            <p className="text-gray-400 mt-3">
              📧 ahmadfadli@example.com
            </p>

            <p className="text-gray-400 mt-3">
              📱 +62 xxx xxxx xxxx
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:email@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/628xxxxxxxxxx"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://youtube.com/"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {year} Ahmad Fadli. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}