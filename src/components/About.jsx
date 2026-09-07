import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="
        bg-gradient-to-br
        from-[#0a0118]
        to-[#26006a]
        text-white
        py-24
        px-6

        /* =========================
           TABLET
           768px - 1023px
        ========================== */
        max-lg:py-20
        max-lg:px-8

        /* =========================
           MOBILE
           375px - 767px
        ========================== */
        max-md:py-16
        max-md:px-6

        /* =========================
           MOBILE KECIL
           <= 374px
        ========================== */
        max-[374px]:py-14
        max-[374px]:px-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-20

          /* =========================
             TABLET
          ========================== */
          max-lg:grid-cols-1
          max-lg:gap-16

          /* =========================
             MOBILE
          ========================== */
          max-md:gap-14

          /* =========================
             MOBILE KECIL
          ========================== */
          max-[374px]:gap-12
        "
      >
        {/* ==================================================
            LEFT CONTENT
        ================================================== */}
        <div>
          {/* Heading */}
          <h2
            className="
              text-5xl
              font-bold
              leading-tight
              mb-8

              /* Tablet */
              max-lg:text-5xl
              max-lg:max-w-3xl

              /* Mobile */
              max-md:text-4xl
              max-md:leading-[1.15]
              max-md:mb-6

              /* Mobile kecil */
              max-[374px]:text-[30px]
              max-[374px]:leading-[1.15]
              max-[374px]:mb-5
            "
          >
            IT Programmer & <br className="hidden sm:block" />
            Lulusan Teknik Informatika
          </h2>

          {/* Paragraph 1 */}
          <p
            className="
              text-gray-300
              leading-8
              mb-5

              /* Tablet */
              max-lg:text-base
              max-lg:leading-7

              /* Mobile */
              max-md:text-sm
              max-md:leading-6
              max-md:mb-4

              /* Mobile kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
            "
          >
            Saya merupakan Fresh Graduate{" "}
            <b className="text-white">Teknik Informatika</b> STT Nurul Fikri yang memiliki 
            ketertarikan pada teknologi informasi, pemrograman, dan pengembangan sistem.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              text-gray-300
              leading-8

              /* Tablet */
              max-lg:text-base
              max-lg:leading-7

              /* Mobile */
              max-md:text-sm
              max-md:leading-6

              /* Mobile kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
            "
          >
            Selama menempuh pendidikan, saya mengembangkan berbagai proyek 
            teknologi, mulai dari website, aplikasi berbasis web, RESTful API, 
            sistem pengelolaan data, hingga sistem monitoring berbasis 
            Internet of Things (IoT). Pengalaman tersebut membantu saya memahami 
            proses pengembangan sistem mulai dari perancangan, pemrograman, 
            pengelolaan database, hingga implementasi.
          </p>

          {/* Sub Heading */}
          <h3
            className="
              text-4xl
              font-bold
              mt-16
              mb-6

              /* Tablet */
              max-lg:text-4xl
              max-lg:mt-12
              max-lg:mb-5

              /* Mobile */
              max-md:text-3xl
              max-md:mt-10
              max-md:mb-5

              /* Mobile kecil */
              max-[374px]:text-[26px]
              max-[374px]:mt-9
              max-[374px]:mb-4
            "
          >
            Kontribusi Profesional
          </h3>

          {/* Paragraph 3 */}
          <p
            className="
              text-gray-300
              leading-8

              /* Tablet */
              max-lg:text-base
              max-lg:leading-7

              /* Mobile */
              max-md:text-sm
              max-md:leading-6

              /* Mobile kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
            "
          >
            Saya memiliki pengalaman di bidang Teknologi Informasi melalui proyek, 
            pekerjaan,mencakup pengembangan aplikasi, website, API, IoT, serta IT Support. 
            dan Aktif dalam beberapa organisasi salah satunya dipercaya sebagai Kepala Departemen 
            Teknologi, Pendidikan dan Olahraga.
          </p>
        </div>

        {/* ==================================================
            RIGHT CONTENT
        ================================================== */}
        <div>
          {/* Heading */}
          <h2
            className="
              text-5xl
              font-bold
              leading-tight
              mb-8

              /* Tablet */
              max-lg:text-5xl
              max-lg:max-w-3xl

              /* Mobile */
              max-md:text-4xl
              max-md:leading-[1.15]
              max-md:mb-6

              /* Mobile kecil */
              max-[374px]:text-[30px]
              max-[374px]:leading-[1.15]
              max-[374px]:mb-5
            "
          >
            Spesialisasi & <br className="hidden sm:block" />
            Tech Stack Inti
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-300
              leading-8
              mb-8

              /* Tablet */
              max-lg:text-base
              max-lg:leading-7
              max-lg:mb-7

              /* Mobile */
              max-md:text-sm
              max-md:leading-6
              max-md:mb-6

              /* Mobile kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
              max-[374px]:mb-5
            "
          >
            Sebagai IT Programmer, saya memiliki pengalaman dalam pengembangan aplikasi, 
            website, backend system, pengelolaan database, dan teknologi IoT menggunakan 
            berbagai tools dan teknologi berikut:
          </p>

          {/* Tech Stack */}
          <div
            className="
              space-y-4
              text-gray-300
              leading-8

              /* Tablet */
              max-lg:space-y-3
              max-lg:text-base
              max-lg:leading-7

              /* Mobile */
              max-md:space-y-3
              max-md:text-sm
              max-md:leading-6

              /* Mobile kecil */
              max-[374px]:space-y-2.5
              max-[374px]:text-[13px]
              max-[374px]:leading-5
            "
          >
            <p>
              <span className="font-bold text-white">Technical Skill :</span>{" "}
              HTML, CSS, Laravel, JavaScript, PHP. React.
            </p>

            <p>
              <span className="font-bold text-white">Programming :</span>{" "}
              Python, C++
            </p>

            <p>
              <span className="font-bold text-white">Database & Query Language :</span>{" "}
              MySQL, MongoDB
            </p>

            <p>
              <span className="font-bold text-white">Version Control Software :</span>{" "}
              Git and GitHub
            </p>

            <p>
              <span className="font-bold text-white">Data Analysis & Visualization :</span>{" "}
              KNIME, Power BI, Google Sheets
            </p>

             <p>
              <span className="font-bold text-white">Microsoft Office :</span>{" "}
              Excel, Word, and PowerPoint
            </p>
          </div>

          {/* Sub Heading */}
          <h3
            className="
              text-4xl
              font-bold
              mt-16
              mb-6

              /* Tablet */
              max-lg:text-4xl
              max-lg:mt-12
              max-lg:mb-5

              /* Mobile */
              max-md:text-3xl
              max-md:mt-10
              max-md:mb-5

              /* Mobile kecil */
              max-[374px]:text-[26px]
              max-[374px]:mt-9
              max-[374px]:mb-4
            "
          >
            Mari Terkoneksi
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-300
              leading-8
              mb-8

              /* Tablet */
              max-lg:text-base
              max-lg:leading-7
              max-lg:mb-7

              /* Mobile */
              max-md:text-sm
              max-md:leading-6
              max-md:mb-6

              /* Mobile kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
              max-[374px]:mb-5
            "
          >
            Saya selalu terbuka untuk kolaborasi, diskusi proyek, maupun peluang
            karier baru.
          </p>

          {/* ==================================================
              SOCIAL MEDIA
          ================================================== */}
          <div
            className="
              flex
              flex-wrap
              gap-5
              text-xl

              /* Tablet */
              max-lg:gap-4

              /* Mobile */
              max-md:gap-3

              /* Mobile kecil */
              max-[374px]:gap-2.5
            "
          >
            {/* Phone */}
            <a
              href="#"
              aria-label="Phone"
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition

                /* Mobile */
                max-md:w-10
                max-md:h-10
                max-md:text-base

                /* Mobile kecil */
                max-[374px]:w-9
                max-[374px]:h-9
                max-[374px]:text-sm
              "
            >
              <FaPhone />
            </a>

            {/* Email */}
            <a
              href="#"
              aria-label="Email"
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition

                max-md:w-10
                max-md:h-10
                max-md:text-base

                max-[374px]:w-9
                max-[374px]:h-9
                max-[374px]:text-sm
              "
            >
              <FaEnvelope />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition

                max-md:w-10
                max-md:h-10
                max-md:text-base

                max-[374px]:w-9
                max-[374px]:h-9
                max-[374px]:text-sm
              "
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition

                max-md:w-10
                max-md:h-10
                max-md:text-base

                max-[374px]:w-9
                max-[374px]:h-9
                max-[374px]:text-sm
              "
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition

                max-md:w-10
                max-md:h-10
                max-md:text-base

                max-[374px]:w-9
                max-[374px]:h-9
                max-[374px]:text-sm
              "
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}