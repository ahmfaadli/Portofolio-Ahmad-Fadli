import { useState } from "react";
import { Link } from "react-router-dom";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  const certificates = [
    {
      id: 1,
      image: "https://g.top4top.io/p_3870wzjv21.jpg",
      title: "Fullstack Developer",
    },
    {
      id: 2,
      image: "https://j.top4top.io/p_3876xrur91.png",
      title: "UI/UX Design",
    },
    {
      id: 3,
      image: "https://b.top4top.io/p_3876s592r1.jpg",
      title: "React JS",
    },
    {
      id: 4,
      image: "https://f.top4top.io/p_3870o7ck81.jpg",
      title: "IoT Workshop",
    },
    {
      id: 5,
      image: "https://c.top4top.io/p_3870wtw6z1.png",
      title: "Database",
    },
    {
      id: 6,
      image: "https://f.top4top.io/p_3876t8blu1.jpg",
      title: "JavaScript",
    },
    {
      id: 7,
      image: "https://e.top4top.io/p_38702pebe1.png",
      title: "JavaScript",
    },
    {
      id: 8,
      image: "https://b.top4top.io/p_38704x9gw1.png",
      title: "JavaScript",
    },
    {
      id: 9,
      image: "https://l.top4top.io/p_3876y1ct01.jpg",
      title: "JavaScript",
    },
  ];

  return (
    <section
      id="certificates"
      className="
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-5
        bg-gradient-to-br
        from-[#0a0118]
        via-[#18002e]
        to-[#26006a]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-6">

        {/* Header */}
        <div className="text-center">

          {/* Badge */}
          <span
            className="
              inline-block
              px-3
              sm:px-4
              py-1
              rounded-full
              bg-purple-600/20
              text-purple-300
              border
              border-purple-500/30
              text-xs
              sm:text-sm
            "
          >
            Sertifikat
          </span>

          {/* Title */}
          <h2
            className="
              mt-4
              sm:mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
            "
          >
            My Certificates
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-400
              mt-4
              sm:mt-5
              max-w-2xl
              mx-auto
              text-xs
              sm:text-sm
              md:text-base
              leading-6
              sm:leading-7
            "
          >
            Beberapa sertifikat pelatihan, workshop, dan kompetensi
            yang pernah saya peroleh.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-3
            gap-2
            sm:gap-4
            md:gap-6
            lg:gap-8
            mt-12
            sm:mt-16
            lg:mt-20
          "
        >
          {certificates.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                cursor-pointer
                group
                rounded-lg
                sm:rounded-xl
                lg:rounded-2xl
                overflow-hidden
                bg-white/5
                border
                border-white/10
                hover:border-purple-500
                transition
                duration-300
                min-w-0
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-24
                    sm:h-32
                    md:h-44
                    lg:h-64
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />
              </div>

              {/* Title */}
              <div
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                "
              >
                <h3
                  className="
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    lg:text-lg
                    font-semibold
                    leading-tight
                    line-clamp-2
                  "
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Certificates */}
        <div
          className="
            flex
            justify-center
            mt-10
            sm:mt-12
            lg:mt-14
          "
        >
          <Link
            to="/certificates"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              px-4
              sm:px-6
              lg:px-7
              py-2.5
              sm:py-3
              lg:py-3.5
              rounded-full
              border
              border-purple-400/40
              bg-purple-500/10
              text-white
              font-semibold
              text-[10px]
              sm:text-sm
              lg:text-base
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-purple-500
              hover:border-purple-400
              hover:shadow-lg
              hover:shadow-purple-500/30
              hover:-translate-y-1
              whitespace-nowrap
            "
          >
            <span>Show More Certificates</span>

            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="
            fixed
            inset-0
            bg-black/80
            backdrop-blur-md
            z-50
            flex
            items-center
            justify-center
            p-3
            sm:p-6
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-6xl
              flex
              flex-col
              items-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                -top-10
                sm:-top-12
                right-0
                text-white
                text-2xl
                sm:text-4xl
                hover:text-purple-400
                transition
                z-10
              "
              aria-label="Close"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="
                rounded-xl
                sm:rounded-2xl
                max-h-[80vh]
                sm:max-h-[85vh]
                lg:max-h-[90vh]
                max-w-full
                w-auto
                object-contain
                shadow-2xl
              "
            />

            {/* Certificate Title */}
            <p
              className="
                text-center
                mt-3
                sm:mt-5
                text-sm
                sm:text-lg
                text-gray-300
              "
            >
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}