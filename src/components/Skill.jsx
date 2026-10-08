import SkillCard from "./SkillCard";

const skills = [
  {
    category: "Mobile App",
    image: "/assets/proyek/senvra-management.webp",
    title: "HR Employee Management",
    desc: "Employee management mobile application for managing attendance, jobdesk, meetings, employee data, and administrative requests",
    to: "/skills/SenvraManagement",
  },
  {
    category: "Mobile App",
    image: "/assets/proyek/uangqu.webp",
    title: "Personal Finance Management",
    desc: "Personal finance management application designed to help users track daily transactions, monitor monthly finances, and manage savings goals offline",
    to: "/skills/Uangqu",
  },
  {
    category: "Mobile App",
    image: "/assets/proyek/dnote.webp",
    title: "Personal Notes App",
    desc: "Lightweight mobile note-taking application for creating, organizing, and managing personal notes with a simple and efficient interface",
    to: "/skills/Dnote",
  },
  {
    category: "Web Developer",
    image: "/assets/proyek/building-modeling.webp",
    title: "Building Modeling Service System",
    desc: "Web-based platform for managing home modeling services, project information, and customer service requests.",
    to: "/skills/Senvrabuilding",
  },
  {
    category: "Web Developer",
    image: "/assets/proyek/senvra.webp",
    title: "Senvra Company Profile",
    desc: "Professional company profile website showcasing digital services, company information, and portfolio projects.",
    to: "/skills/Senvra",
  },
  {
    category: "Web Developer",
    image: "/assets/proyek/restauran.webp",
    title: "Mporos Restaurant Management",
    desc: "Full-stack web-based restaurant management system for managing menus, categories, orders, and operational reports",
    to: "/skills/Restauran",
  },
  {
    category: "Web Developer",
    image: "/assets/proyek/covidid.webp",
    title: "COVID-19 Information System",
    desc: "Web-based information system for presenting and monitoring COVID-19 data through REST API integration and dynamic data processing",
    to: "/skills/Covidid",
  },
  {
    category: "Web Developer",
    image: "/assets/proyek/sembako.webp",
    title: "Sembako E-Commerce",
    desc: "E-commerce platform for browsing daily essentials, managing product catalogs, and placing orders online",
    to: "/skills/Sembako",
  },
  {
    category: "IoT Engineer",
    image: "/assets/proyek/smartroom.webp",
    title: "Smart Room IoT Monitoring & Control",
    desc: "IoT-based smart room system for real-time environmental monitoring and remote device control using ESP32, sensors, and a web-based interface",
    to: "/skills/Smartroom",
  },
  {
    category: "UI/UX Design",
    image: "/assets/proyek/laptopstore.webp",
    title: "Sistem Pemesanan Laptop",
    desc: "UI/UX design for a laptop e-commerce platform, focusing on product discovery, catalog navigation, product details, and a streamlined ordering experience",
    to: "/skills/Niblenset",
  },
  {
    category: "UI/UX Design",
    image: "/assets/proyek/astro.webp",
    title: "Astro Event Management Platform",
    desc: "UI/UX design for a student event management platform, focusing on intuitive navigation, event information, registration flow, and user experience",
    to: "/skills/Astro",
  },
  {
    category: "UI/UX Design",
    image: "/assets/proyek/siom.webp",
    title: "Student Organization Management System",
    desc: "UI/UX design for a student organization platform designed to simplify organizational activities, information management, and user navigation.",
    to: "/skills/Siom",
  },
];

export default function Skill() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0a0118]
        via-[#170036]
        to-[#26006a]
        px-4
        pt-20
        pb-20
        text-white
        sm:px-6
        sm:pt-20
        sm:pb-20
        lg:px-8
        lg:pt-20
        lg:pb-20
        max-lg:pt-16
        max-lg:pb-16
        max-md:pt-14
        max-md:pb-14
        max-sm:pt-12
        max-sm:pb-12
        max-[374px]:pt-10
        max-[374px]:pb-10
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="
            mb-10
            px-1
            text-center
            sm:mb-12
            md:mb-16
            lg:mb-20
          "
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-purple-500/30
              bg-purple-600/20
              px-3
              py-1
              text-xs
              font-medium
              text-purple-300
              sm:px-4
              sm:text-sm
            "
          >
            Portfolio
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              leading-tight
              sm:mt-5
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            My Projects
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              px-1
              text-sm
              leading-7
              text-gray-300
              sm:mt-5
              sm:px-4
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Explore my IT projects, showcasing my experience in software
            development, web development, UI/UX design, Internet of Things,
            and system development
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.to}
              image={skill.image}
              title={skill.title}
              desc={skill.desc}
              to={skill.to}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}