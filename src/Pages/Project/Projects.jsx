import { useEffect } from "react";
import SkillCard from "../../components/SkillCard";
import { Link } from "react-router-dom";

export default function Projects() {
  // Selalu mulai dari posisi paling atas
  // ketika halaman Projects dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      image: "/assets/proyek/smartroom.jpg",
      title: "Smart Room",
      desc: "Monitoring & kontrol perangkat IoT real-time.",
      to: "/skills/IoT",
    },
    {
      image: "/assets/proyek/Laptopstore.png",
      title: "Sistem Pemesanan Laptop",
      desc: "E-commerce laptop dengan katalog & pemesanan.",
      to: "/skills/LaptopStore",
    },
    {
      image: "/assets/proyek/covidid.png",
      title: "Sistem Informasi Covid id",
      desc: "Monitoring data COVID-19 berbasis REST API.",
      to: "/skills/Covidid",
    },
    {
      image: "/assets/proyek/Moveapp.png",
      title: "Move app",
      desc: "Katalog film berbasis React & REST API.",
      to: "/skills/Moveapp",
    },
    {
      image: "/assets/proyek/Sembako.png",
      title: "Sistem Pemesanan Sembako",
      desc: "E-commerce sembako dengan sistem pemesanan.",
      to: "/skills/Sembako",
    },
    {
      image: "/assets/proyek/Nusaloka.png",
      title: "Sistem Pemesanan Kopi",
      desc: "Sistem pemesanan kopi berbasis React & Laravel.",
      to: "/skills/Nusaloka",
    },
    {
      image: "/assets/proyek/Restauran.png",
      title: "Sistem Pemesanan Restourant",
      desc: "Platform order menu berbasis web.",
      to: "/skills/Restauran",
    },
    {
      image: "/assets/proyek/Senvra.png",
      title: "Company Profile",
      desc: "Website profil & layanan digital agency.",
      to: "/skills/Senvra",
    },
    {
      image: "https://j.top4top.io/p_3906ppbq11.jpg",
      title: "UI/UX sistem Organisasi Mahasiswa",
      desc: "3D object modeling and rendering.",
      to: "/skills/Siom",
    },
    {
      image: "https://e.top4top.io/p_3876oy2f01.png",
      title: "Portfolio",
      desc: "3D object modeling and rendering.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0a0118]
        via-[#170036]
        to-[#26006a]
        py-20
        sm:py-24
        px-5
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="
              inline-block
              px-4
              py-1
              rounded-full
              bg-purple-600/20
              text-purple-300
              text-sm
              font-medium
              border
              border-purple-500/30
            "
          >
            Portfolio
          </span>

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
            "
          >
            All Projects
          </h1>

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-gray-300
              text-base
              sm:text-lg
              leading-8
            "
          >
            Jelajahi berbagai project yang telah saya kerjakan dalam bidang
            software development, Internet of Things, multimedia, dan digital
            design.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <SkillCard
              key={index}
              image={project.image}
              title={project.title}
              desc={project.desc}
              to={project.to}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/#skills"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              px-5
              sm:px-6
              md:px-7
              py-3
              sm:py-3.5
              rounded-full
              border
              border-purple-400/40
              bg-purple-500/10
              text-white
              font-semibold
              text-xs
              sm:text-sm
              md:text-base
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-purple-500
              hover:border-purple-400
              hover:shadow-lg
              hover:shadow-purple-500/30
              hover:-translate-y-1
              active:scale-95
              whitespace-nowrap
            "
          >
            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </section>
  );
}