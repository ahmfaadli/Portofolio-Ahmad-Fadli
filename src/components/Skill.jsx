import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";

export default function Skill() {
  const skills = [
    {
      image: "/assets/proyek/smartroom.jpg",
      title: "Smart Room",
      desc: "C++, Node RED",
      to: "/skills/IoT",
    },
    {
      image: "/assets/proyek/Laptopstore.png",
      title: "Sistem Pemesanan Laptop",
      desc: "Web App Penjualan Laptop Moderen & Responsif.",
      to: "/skills/LaptopStore",
    },
    {
      image: "/assets/proyek/covidid.png",
      title: "Sistem Informasi Covid id",
      desc: "Developing secure APIs and server-side applications.",
      to: "/skills/Covidid",
    },
    {
      image: "/assets/proyek/Moveapp.png",
      title: "Move app",
      desc: "ESP32, Arduino, sensors, and automation systems.",
      to: "/skills/Moveapp",
    },
    {
      image: "/assets/proyek/Sembako.png",
      title: "Sistem Pemesanan Sembako",
      desc: "Wireframe, prototype, and interface design.",
      to: "/skills/Sembako",
    },
    {
      image: "/assets/proyek/Nusaloka.png",
      title: "Sistem Pemesanan Kopi",
      desc: "Poster, banner, and social media design.",
      to: "/skills/Nusaloka",
    },
    {
      image: "/assets/proyek/Restauran.png",
      title: "Sistem Pemesanan Restourant",
      desc: "Editing videos with smooth transitions and storytelling.",
      to: "/skills/Restauran",
    },
    {
      image: "https://i.top4top.io/p_3876hw8j91.png",
      title: "Company Profile",
      desc: "Creating engaging animated visual content.",
    },
    {
      image: "https://e.top4top.io/p_3876oy2f01.png",
      title: "Portfolio",
      desc: "3D object modeling and rendering.",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#170036] to-[#26006a] py-20 sm:py-24 px-5 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm font-medium border border-purple-500/30">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            My Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-8">
            Explore some of the technologies, tools, and projects that I have
            worked on in software development, Internet of Things, multimedia,
            and digital design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex justify-center mt-14">
          <Link
            to="/Projects"
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
            <span>Show More Projects</span>

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
    </section>
  );
}