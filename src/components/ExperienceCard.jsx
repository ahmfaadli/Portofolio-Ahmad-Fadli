import React from "react";

export default function ExperienceCard({ experience }) {
  const Icon = experience?.icon;

  return (
    <article
      data-experience-card
      className="
        group
        w-[calc(100vw-32px)]
        max-w-none
        shrink-0
        snap-start

        sm:w-[calc(100vw-48px)]

        md:w-[78%]

        lg:w-[390px]

        xl:w-[410px]
      "
    >
      <div
        className="
          flex
          w-full
          min-w-0
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#120021]
          shadow-xl
          shadow-black/20

          transition-all
          duration-300

          sm:rounded-[22px]

          lg:rounded-2xl
          lg:hover:-translate-y-1
          lg:hover:border-purple-400/30
          lg:hover:shadow-purple-950/40
        "
      >
        {/* =========================
            IMAGE
        ========================== */}
        <div
          className="
            relative
            aspect-[16/9]
            w-full
            shrink-0
            overflow-hidden
            bg-gradient-to-br
            from-purple-950
            via-[#18002e]
            to-[#0d001c]
          "
        >
          {experience?.image && (
            <img
              src={experience.image}
              alt={experience?.title || "Experience"}
              draggable="false"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center

                transition-transform
                duration-500

                lg:group-hover:scale-[1.04]
              "
            />
          )}

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#120021]/85
              via-transparent
              to-transparent
            "
          />

          {/* =========================
              YEAR
          ========================== */}
          {experience?.year && (
            <div
              className="
                absolute
                left-4
                top-4

                sm:left-5
                sm:top-5

                md:left-6
                md:top-6

                lg:left-4
                lg:top-4
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/40
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  leading-none
                  text-white
                  backdrop-blur-md

                  sm:px-3.5
                  sm:py-2
                  sm:text-[11px]

                  md:px-4
                  md:text-xs

                  lg:px-3
                  lg:py-1.5
                  lg:text-[10px]
                "
              >
                {experience.year}
              </span>
            </div>
          )}
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            flex
            w-full
            min-w-0
            flex-col

            px-5
            py-5

            sm:px-6
            sm:py-6

            md:px-7
            md:py-7

            lg:px-5
            lg:py-5

            xl:px-6
            xl:py-6
          "
        >
          {/* =========================
              TITLE
          ========================== */}
          <h3
            className="
              w-full
              min-w-0
              break-words
              text-lg
              font-semibold
              leading-[1.4]
              tracking-tight
              text-white

              sm:text-xl

              md:text-2xl

              lg:text-xl

              xl:text-[21px]
            "
          >
            {experience?.title}
          </h3>

          {/* =========================
              ORGANIZATION
          ========================== */}
          {experience?.organization && (
            <p
              className="
                mt-2
                w-full
                min-w-0
                break-words
                text-xs
                font-medium
                leading-5
                text-purple-400

                sm:text-sm

                md:text-[15px]

                lg:text-sm

                xl:text-[15px]
              "
            >
              {experience.organization}
            </p>
          )}

          {/* =========================
              DESCRIPTION
          ========================== */}
          {experience?.description && (
            <p
              className="
                mt-3
                w-full
                min-w-0
                break-words
                text-xs
                leading-5
                text-purple-100/60

                sm:mt-4
                sm:text-sm
                sm:leading-6

                md:text-[15px]
                md:leading-7

                lg:mt-3
                lg:text-sm
                lg:leading-6

                xl:text-[14px]
                xl:leading-6
              "
            >
              {experience.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}