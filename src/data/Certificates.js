const certificates = [
  {
    images: ["/assets/certificates/fwd.webp"],
    title: "Fullstack Developer",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/nfa-data/Codeless1.webp",
      "/assets/certificates/nfa-data/Codeless2.webp",
    ],
    title: "Codeless Data Science",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/Office/Office1.webp",
      "/assets/certificates/Office/Office2.webp",
    ],
    title: "Office Profesional",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/fullstackweb.webp",
      "/assets/certificates/fullstackweb2.webp",
    ],
    title: "Fullstack Web Development",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/uiux.webp"],
    title: "Design Thinking",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/teamwok.webp"],
    title: "Soft Skill Teamwork",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/saylor1/se1.webp",
      "/assets/certificates/saylor1/se2.webp",
    ],
    title: "Software Engineering",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/saylor2/C++1.webp",
      "/assets/certificates/saylor2/C++2.webp",
    ],
    title: "C++ Programming",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/saylor3/so1.webp",
      "/assets/certificates/saylor3/so2.webp",
    ],
    title: "Operating Systems",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/sqldqlab.webp"],
    title: "SQL With AI",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/datadqlab.webp"],
    title: "Data Science With Python",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/pytondqlab.webp"],
    title: "Python With AI",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/udemy4.webp"],
    title: "HTML & CSS Build",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/udemy3.webp"],
    title: "JavaScript and JQuery",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/udemy2.webp"],
    title: "SQL & PostgreSQL",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/udemy5.webp"],
    title: "Data Engineer Build",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/udemy1.webp"],
    title: "Data Analyst",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/aguna1.webp"],
    title: "Machine Learning",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/aguna2.webp"],
    title: "Network Fundamental",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/aguna3.webp"],
    title: "Python Fundamental",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/aguna4.webp"],
    title: "Linux Fundamental",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/aguna5.webp"],
    title: "Jaringan dengan PNETLab",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/dicoding1/dicoding1.webp",
      "/assets/certificates/dicoding1/dicoding2.webp",
      "/assets/certificates/dicoding1/dicoding3.webp",
    ],
    title: "Programming dengan Java",
    category: "pelatihan",
  },
  {
    images: [
      "/assets/certificates/dicoding2/dicoding1.webp",
      "/assets/certificates/dicoding2/dicoding2.webp",
    ],
    title: "Pemrograman SOLID",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/Coursera2.webp"],
    title: "Azure IoT Hub",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/Coursera1.webp"],
    title: "AWS S3 Basics",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/Coursera3.webp"],
    title: "Virtual Private Cloud",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/cyber.webp"],
    title: "Cybersecurity Educator",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/playstore.webp"],
    title: "Google Play Store Listing",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/knime.webp"],
    title: "Besic in KNIME",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/toefl.webp"],
    title: "Sertifikat TOEFL",
    category: "pelatihan",
  },
  {
    images: ["/assets/certificates/desain.webp"],
    title: "Graphics Design",
    category: "pelatihan",
  },

  {
    images: ["/assets/certificates2/bem-kadep.webp"],
    title: "Kepala Departemen TEKPORA",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/bem-astro.webp"],
    title: "Steering Committee ASTRO 7.0",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/bem-ict.webp"],
    title: "Steering Committee ICT",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/nfscc.webp"],
    title: "Staff Media Informasi",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/bem-media.webp"],
    title: "Staff Media Kreatif",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/senada-media.webp"],
    title: "Staff Media Kreatif",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/bem-speakup.webp"],
    title: "IT Support Seminar Speak UP",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/senada-iyf.webp"],
    title: "Staff Media Informasi",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/senada-rapimda.webp"],
    title: "Media Informasi RAPIMDA JADEBEK",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/senada-katada.webp"],
    title: "Media Informasi Kajian Kastrad",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/senada-gws.webp"],
    title: "Media Informasi Seminar GrowUP",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/haus.webp"],
    title: "Peserta Webinar Haus Marketing",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/pengabdian.webp"],
    title: "Peserta Pengabdian Masyarakat",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/astro2.webp"],
    title: "Peserta Lomba Mini Hackathon",
    category: "experience",
  },
  {
    images: ["/assets/certificates2/astro1.webp"],
    title: "Peserta Lomba Digital Branding",
    category: "experience",
  },
];

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pelatihan",
    value: "pelatihan",
  },
  {
    label: "Experience",
    value: "experience",
  },
];

const INITIAL_VISIBLE = 9;

const allCategoryPriority = [
  "Fullstack Developer",
  "Codeless Data Science",
  "Office Profesional",
  "Sertifikat TOEFL",
  "Soft Skill Teamwork",
  "HTML & CSS Build",
  "Kepala Departemen TEKPORA",
  "Steering Committee ASTRO 7.0",
  "Steering Committee ICT",
];

export {
  certificates,
  categories,
  INITIAL_VISIBLE,
  allCategoryPriority,
};