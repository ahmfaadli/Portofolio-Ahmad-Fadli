export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-gradient-to-br from-[#0a0118] via-[#18002e] to-[#26006a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-purple-600/20 text-purple-300 text-sm font-medium border border-purple-500/30">
            Portfolio Multimedia
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            My Portfolio
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Kumpulan portofolio dan hasil karya yang telah saya kerjakan
            selama perjalanan sebagai mahasiswa dan Web Developer.
          </p>
        </div>

        {/* Portfolio Card */}
        <div className="mt-20 flex justify-center">

          <div
            className="
              group
              w-full
              max-w-4xl
              rounded-3xl
              overflow-hidden
              bg-white/5
              border
              border-purple-500/20
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(124,58,237,0.15)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-purple-500/50
              hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]
            "
          >

            {/* PDF Preview / Image */}
            <div className="relative bg-black/30 p-5">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-purple-500/20
                  bg-[#0d061a]
                "
              >

                <img
                  src="/assets/proyek/Portofolio.jpg"
                  alt="Portfolio Preview"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0a0118]/90
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                {/* PDF Label */}
                <div className="absolute top-5 left-5">
                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-purple-600/80
                      backdrop-blur-md
                      text-white
                      text-sm
                      font-medium
                      border
                      border-purple-400/30
                    "
                  >
                    PDF Portfolio
                  </span>
                </div>

              </div>
            </div>

            {/* Information */}
            <div className="p-7">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    My Creative Portfolio
                  </h3>

                  <p className="mt-2 text-gray-400 leading-relaxed">
                    Dokumentasi project, web development, UI/UX, graphic
                    design, motion graphic, dan project IoT.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">

                  {/* View */}
                  <a
                    href="https://drive.google.com/file/d/1ci3tKdJ4dHrb59p1d-BKm2WHNt1H1O1H/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      bg-purple-600
                      hover:bg-purple-500
                      text-white
                      font-semibold
                      transition-all
                      duration-300
                      hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>

                    View PDF
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}