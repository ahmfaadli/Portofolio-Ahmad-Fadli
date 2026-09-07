export default function Education() {
  const companies = [
    {
      logo: "https://e.top4top.io/p_3870qqfp01.jpg",
    },
    {
      logo: "https://f.top4top.io/p_38703qkk11.jpg",
    },
    {
      logo: "https://h.top4top.io/p_3870p4anf1.jpg",
    },
    {
      logo: "https://j.top4top.io/p_3870cvm3s1.jpg",
    },
    {
      logo: "https://h.top4top.io/p_3876ib66d1.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="
        py-28
        bg-gradient-to-br from-[#0a0118] via-[#18002e] to-[#26006a]

        /* =========================
           TABLET
           768px - 1023px
        ========================== */
        max-lg:py-24
        max-md:py-20

        /* =========================
           HP BESAR
           640px - 767px
        ========================== */
        max-sm:py-16

        /* =========================
           HP KECIL
           <= 374px
        ========================== */
        max-[374px]:py-14
      "
    >
      <div
        className="
          max-w-7xl mx-auto px-6

          /* Tablet */
          max-lg:px-8

          /* HP */
          max-sm:px-5

          /* HP kecil */
          max-[374px]:px-4
        "
      >
        {/* =========================
            HEADING
        ========================== */}
        <div className="text-center">
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-purple-600/20
              text-purple-300
              text-sm
              font-medium
              border
              border-purple-500/30

              /* Tablet */
              max-md:px-4
              max-md:py-1.5
              max-md:text-xs

              /* HP kecil */
              max-[374px]:px-3
              max-[374px]:py-1
              max-[374px]:text-[11px]
            "
          >
            Education & Bootcamp
          </span>

          <h2
            className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              text-white

              /* Tablet */
              max-lg:text-5xl
              max-lg:leading-tight

              /* HP */
              max-md:mt-5
              max-md:text-4xl
              max-md:leading-[1.15]

              /* HP kecil */
              max-[374px]:mt-4
              max-[374px]:text-[30px]
              max-[374px]:leading-[1.15]
            "
          >
            Education & Bootcamp History
          </h2>

          <p
            className="
              text-gray-400
              mt-6
              text-lg
              max-w-3xl
              mx-auto

              /* Tablet */
              max-lg:text-base
              max-lg:max-w-2xl
              max-lg:mt-5

              /* HP */
              max-md:text-sm
              max-md:leading-6
              max-md:mt-4
              max-md:max-w-xl

              /* HP kecil */
              max-[374px]:text-[13px]
              max-[374px]:leading-5
              max-[374px]:mt-3
            "
          >
            Educational and bootcamp background supporting competency 
            development in the field of information technology.
          </p>
        </div>

        {/* =========================
            LOGO
        ========================== */}
        <div
          className="
            mt-24
            flex
            flex-wrap
            justify-center
            items-center
            gap-16

            /* Tablet */
            max-lg:mt-20
            max-lg:gap-12

            /* HP besar */
            max-md:mt-16
            max-md:gap-10

            /* HP */
            max-sm:mt-14
            max-sm:gap-8

            /* HP kecil */
            max-[374px]:mt-12
            max-[374px]:gap-6
          "
        >
          {companies.map((item, index) => (
            <div
              key={index}
              className="
                group
                flex
                items-center
                justify-center

                /* Desktop tetap sama */

                /* Tablet */
                max-lg:w-36
                max-lg:h-36

                /* HP besar */
                max-md:w-32
                max-md:h-32

                /* HP */
                max-sm:w-28
                max-sm:h-28

                /* HP kecil */
                max-[374px]:w-24
                max-[374px]:h-24
              "
            >
              <img
                src={item.logo}
                alt=""
                className="
                  w-40
                  h-40
                  object-contain
                  transition-all
                  duration-300
                  cursor-pointer
                  group-hover:scale-110
                  group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]

                  /* Tablet */
                  max-lg:w-36
                  max-lg:h-36

                  /* HP besar */
                  max-md:w-32
                  max-md:h-32

                  /* HP */
                  max-sm:w-28
                  max-sm:h-28

                  /* HP kecil */
                  max-[374px]:w-24
                  max-[374px]:h-24
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}