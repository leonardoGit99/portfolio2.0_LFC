export const getNavItems = (t: (key: string) => string) => [
  {
    name: t("about"),
    link: "#about",
  },
  {
    name: t("projects"),
    link: "#projects",
  },
  {
    name: t("certifications"),
    link: "#certifications",
  },
  {
    name: t("experience"),
    link: "#experience",
  },
  {
    name: t("contact"),
    link: "#contact",
  },
];

export const getInfoGridItems = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("gridItemsLabels.item1.title"),
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/deal-2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: t("gridItemsLabels.item2.title"),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start lg:text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: t("gridItemsLabels.item3.title"),
    description: t("gridItemsLabels.item3.description"),
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: t("gridItemsLabels.item4.title"),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: t("gridItemsLabels.item5.title"),
    description: t("gridItemsLabels.item5.description"),
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: t("gridItemsLabels.item6.title"),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 py-0 md:py-5 lg:py-10",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const stackList = [[
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
], [
  "Express.js",
  "PostgreSQL",
  "Firebase",
]]

export const projects = [
  {
    id: 1,
    title: "Academic Connection",
    description: "Academic Connection is a web application designed to connect students and parents with secondary schools.",
    state: true,
    img: "/conexion-academica.webp",
    imgRotation: {
      transform: 'rotate(2.6deg)',
      transformOrigin: 'center'
    },
    iconLists: ["/re.svg", "/bootstrap.svg", "/firebase.svg", "/figma.svg"],
    liveDemoLink: "https://conexion-academica.onrender.com",
    GithubLink: "https://github.com/No-Country-simulation/c22-22-t-webapp",
  },
  {
    id: 2,
    title: "TaskFlow",
    description: "Task management platform designed to simplify daily life. With an intuitive and efficient interface, you can create, read, update and delete tasks with ease.",
    state: false,
    img: "/taskflow.png",
    imgRotation: {
      transform: 'rotate(3deg)',
      transformOrigin: '190px 0'
    },
    iconLists: ["/re.svg", "/bootstrap.svg", "/node.svg", "/postgresql.svg", "/cloudinary.svg"],
    liveDemoLink: "https://pern-stack-by-lfc.vercel.app",
    GithubLink: "https://github.com/leonardoGit99/pern-stack_server",
  },
  {
    id: 3,
    title: "EzRental",
    description: "A property rental platform inspired by Airbnb, allowing users to search, book, and manage stays intuitively. It features search filters, user profiles, and a booking system for a seamless experience.",
    state: false,
    img: "/ezrental.jpg",
    imgRotation: {
      transform: 'rotate(3deg)',
      transformOrigin: '190px 0'
    },
    iconLists: ["/re.svg", "/ant-design.svg", "/firebase.svg", "/node.svg", "/postgresql.svg","/gdrive.svg"],
    liveDemoLink: "https://ez-rental-kinsta-front.vercel.app",
    GithubLink: "https://github.com/leonardoGit99/EzRental",
  },
  {
    id: 4,
    title: "BettyStore",
    description: "A Point of Sale (POS) system developed for a local store, enabling efficient sales management, inventory tracking, and customer management. ",
    state: false,
    img: "/bettystore.png",
    imgRotation: {
      transform: 'rotate(2.6deg)',
      transformOrigin: '100px 0'
    },
    iconLists: ["/re.svg", "/ant-design.svg", "/php.svg", "/mysql.svg", "/firebase.svg"],
    liveDemoLink: "https://truebettystore.000webhostapp.com",
    GithubLink: "https://github.com/leonardoGit99/BettyStore",
  },
];

export const certifications = [
  {
    description:
      "A comprehensive course covering the fundamentals of JavaScript, including ES6+ features, DOM manipulation, and asynchronous programming.",
    issuer: "Meta & Coursera",
    keyAchievement: "Programming with JavaScript",
    img: "/meta.svg",
  },
  {
    description:
      "This certification focuses on creating modern, responsive layouts using HTML, CSS, and Flexbox/Grid. It emphasizes building adaptable websites for various devices while ensuring optimal user experience.",
    issuer: "freeCodeCamp",
    keyAchievement: "Responsive Web Design",
    img: "/freecodecamp-logo.svg",
  },
  {
    description:
      "This certification recognizes high proficiency in English at the B1-B2 level. It focuses on key skills such as speaking, listening, reading, and writing. Practical assessments ensure effective communication in diverse contexts.",
    issuer: "Centro Boliviano Americano",
    keyAchievement: "Achievement Test Certificate",
    img: "/cba.png",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    desc: "I worked on the project 'Academic Management of the Faculty of Science and Technology - UMSS', from the initial concept through UI design and database implementation, as well as leading my team.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "I worked with No Country’s selected team, including developers, UX/UI designers, QA specialists, and a team lead from various countries, to develop a responsive web platform for a Argentina's secondary school.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Development",
    desc: "JavaScript • TypeScript • ReactJs • NextJs • Tailwind CSS • Ant Design • Bootstrap • Cloudinary Figma • Redux • Zustand",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Development",
    desc: "NodeJs • ExpressJs • PostgreSQL • SQLServer •  Spring Boot • Java • PHP • Git • Firebase • Cloudinary • RESTful APIs ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/leonardoGit99"
  },
  {
    id: 2,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/leonardo-fuentes-claros-4a425b186/"
  },
];