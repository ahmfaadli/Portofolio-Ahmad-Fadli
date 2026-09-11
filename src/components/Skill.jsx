import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";

export default function Skill() {
  const skills = [
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
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0a0118]
        via-[#170036]
        to-[#26006a]
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        px-4
        sm:px-6
        lg:px-8
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="
            text-center
            mb-10
            sm:mb-12
            md:mb-16
            lg:mb-20
            px-1
          "
        >
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
              text-xs
              sm:text-sm
              font-medium
              border
              border-purple-500/30
            "
          >
            Portfolio
          </span>

          {/* Title */}
          <h2
            className="
              mt-4
              sm:mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
            "
          >
            My Projects
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              sm:mt-5
              max-w-3xl
              mx-auto
              text-gray-300
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              sm:leading-8
              px-1
              sm:px-4
            "
          >
            Explore my IT projects, showcasing my experience in software 
            development, web development, Internet of Things, and system 
            development.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              image={skill.image}
              title={skill.title}
              desc={skill.desc}
              to={skill.to}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div
          className="
            flex
            justify-center
            mt-10
            sm:mt-12
            md:mt-14
            lg:mt-16
            px-4
          "
        >
          <Link
            to="/projects"
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
            <span>Show More Projects</span>

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
    </section>
  );
}