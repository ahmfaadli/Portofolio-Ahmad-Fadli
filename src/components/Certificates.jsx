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
      className="py-28 bg-gradient-to-br from-[#0a0118] via-[#18002e] to-[#26006a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30">
            Sertifikat
          </span>

          <h2 className="mt-5 text-5xl font-extrabold">
            My Certificates
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Beberapa sertifikat pelatihan, workshop, dan kompetensi
            yang pernah saya peroleh.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {certificates.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                cursor-pointer
                group
                rounded-2xl
                overflow-hidden
                bg-white/5
                border
                border-white/10
                hover:border-purple-500
                transition
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Certificates */}
        <div className="flex justify-center mt-14">
          <Link
            to="/certificates"
            className="
              group
              inline-flex
              items-center
              gap-3
              px-7
              py-3.5
              rounded-full
              border
              border-purple-400/40
              bg-purple-500/10
              text-white
              font-semibold
              text-sm
              sm:text-base
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-purple-500
              hover:border-purple-400
              hover:shadow-lg
              hover:shadow-purple-500/30
              hover:-translate-y-1
            "
          >
            <span>Show More Certificates</span>

            <span
              className="
                text-lg
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
            p-6
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                -top-12
                right-0
                text-white
                text-4xl
                hover:text-purple-400
              "
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="
                rounded-2xl
                max-h-[90vh]
                w-auto
                shadow-2xl
              "
            />

            <p className="text-center mt-5 text-lg text-gray-300">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}