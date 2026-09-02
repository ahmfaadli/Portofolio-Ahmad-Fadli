import { useState } from "react";

export default function CertificatesPage() {
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
    {
      id: 10,
      image: "https://l.top4top.io/p_3870tedux1.jpg",
      title: "JavaScript",
    },
    {
      id: 11,
      image: "https://i.top4top.io/p_3876rpwuz1.png",
      title: "JavaScript",
    },
    {
      id: 12,
      image: "/certificates/certificate6.jpg",
      title: "JavaScript",
    },
    {
      id: 13,
      image: "https://a.top4top.io/p_3876qlcj51.jpg",
      title: "JavaScript",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#18002e] to-[#26006a] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30">
            Portfolio
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            All Certificates
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400">
            Koleksi sertifikat pelatihan, workshop, dan kompetensi
            yang pernah saya peroleh.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-72
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  Certificate
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-md
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
                transition
              "
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="
                max-h-[85vh]
                max-w-full
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />

            <p className="text-center mt-5 text-lg text-gray-300">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}