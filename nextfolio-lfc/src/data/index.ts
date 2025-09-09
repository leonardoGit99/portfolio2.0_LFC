import { IoPerson, IoFolderOpen, IoRibbon, IoBriefcase, IoMail } from "react-icons/io5";


export const getNavItems = (t: (key: string) => string) => [
  {
    name: t("about"),
    link: "#about",
    icon: IoPerson ,
  },
  {
    name: t("projects"),
    link: "#projects",
    icon: IoFolderOpen ,
  },
  {
    name: t("certifications"),
    link: "#certifications",
    icon: IoRibbon ,
  },
  {
    name: t("experience"),
    link: "#experience",
    icon: IoBriefcase ,
  },
  {
    name: t("contact"),
    link: "#contact",
    icon: IoMail ,
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

export const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("fifthProject.title"),
    description: t("fifthProject.description"),
    state: true,
    img: "/covertron.webp",
    imgRotation: {
      transform: 'rotate(2.6deg)',
      transformOrigin: '100px 0'
    },
    iconLists: ["/nextjs.svg", "/ts.svg", "/shadcn.png", "/express.svg","/node.svg","/cloudinary.svg","/postgresql.svg"],
    liveDemoLink: "https://covertron.vercel.app",
    GithubLink: "https://github.com/leonardoGit99/covertron-server_LFC",
  },
  {
    id: 2,
    title: t("firstProject.title"),
    description: t("firstProject.description"),
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
    id: 3,
    title: t("secondProject.title"),
    description: t("secondProject.description"),
    state: true,
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
    id: 4,
    title: t("thirdProject.title"),
    description: t("thirdProject.description"),
    state: true,
    img: "/ezrental.jpg",
    imgRotation: {
      transform: 'rotate(3deg)',
      transformOrigin: '190px 0'
    },
    iconLists: ["/re.svg", "/ant-design.svg", "/firebase.svg", "/node.svg", "/postgresql.svg", "/gdrive.svg"],
    liveDemoLink: "https://ez-rental-nine.vercel.app",
    GithubLink: "https://github.com/leonardoGit99/EzRental",
  },
  {
    id: 5,
    title: t("fourthProject.title"),
    description: t("fourthProject.description"),
    state: false,
    img: "/bettystore.png",
    imgRotation: {
      transform: 'rotate(2.6deg)',
      transformOrigin: '100px 0'
    },
    iconLists: ["/re.svg", "/ant-design.svg", "/php.svg", "/mysql.svg", "/firebase.svg"],
    liveDemoLink: "https://truebettystore.000webhostapp.com",
    GithubLink: "https://github.com/leonardoGit99/BettyStore",
  }
];

export const getCertifications = (t: (key: string) => string) => [
  {
    description: t("certificationOne.description"),
    issuer: "Meta & Coursera",
    keyAchievement: t("certificationOne.title"),
    img: "/meta.svg",
  },
  {
    description: t("certificationTwo.description"),
    issuer: "freeCodeCamp",
    keyAchievement: t("certificationTwo.title"),
    img: "/freecodecamp-logo.svg",
  },
  {
    description: t("certificationThree.description"),
    issuer: "Centro Boliviano Americano",
    keyAchievement: t("certificationThree.title"),
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

export const getWorkExperience = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("experienceOne.title"),
    desc: t("experienceOne.description"),
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: t("experienceTwo.title"),
    desc: t("experienceTwo.description"),
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: t("experienceThree.title"),
    desc: t("experienceThree.description"),
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: t("experienceFour.title"),
    desc: t("experienceFour.description"),
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const getApproachItems = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("phases.phaseOne.title"),
    description: t("phases.phaseOne.description")
  },
  {
    id: 2,
    title: t("phases.phaseTwo.title"),
    description: t("phases.phaseTwo.description")
  },
  {
    id: 3,
    title: t("phases.phaseThree.title"),
    description: t("phases.phaseThree.description")
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/leonardoGit99"
  },
  {
    id: 2,
    img: "/link.svg",
    url: "http://www.linkedin.com/in/leonardo-fuentes-claros"
  },
];

