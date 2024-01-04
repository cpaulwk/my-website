import {
  shape1,
  shape2,
  shape3,
  shape4,
  shape5,
  shape6,
  shape7,
  shape8,
  shape9,
  shape10
} from "@/public/hero/shapes";

import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"

import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi"

import {
  TbBrandNextjs,
  TbBrandThreejs,
} from "react-icons/tb"

import {
  SiExpo,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiRedux,
  SiVercel,
} from "react-icons/si"

import { portrait, vinio, ystra } from "@/public/images";

const hero = {
  title: "Paul Wen-Kai Chow",
  description: [
    { name: "Portfolio" },
    { name: "Fullstack Developer" },
    { name: "Paris, France" }
  ],
  shapes: [
    {
      name: "Shape 1",
      icon: shape1,
    },
    {
      name: "Shape 2",
      icon: shape2,
    },
    {
      name: "Shape 3",
      icon: shape3,
    },
    {
      name: "Shape 4",
      icon: shape4,
    },
    {
      name: "Shape 5",
      icon: shape5,
    },
    {
      name: "Shape 6",
      icon: shape6,
    },
    {
      name: "Shape 7",
      icon: shape7,
    },
    {
      name: "Shape 8",
      icon: shape8,
    },
    {
      name: "Shape 9",
      icon: shape9,
    },
    {
      name: "Shape 10",
      icon: shape10,
    },
  ],
};

const introduction = {
  title: "Who am I?",
  description: [
    {
      name: "Paragraph 1",
      content: "Raised within a family of merchants, my academic journey at the business school was significantly influenced by its adjacency to an engineering institution, instilling in me a profound passion for programming and advanced technologies.",
    },
    {
      name: "Paragraph 2",
      content: "Over a year ago, I transitioned into self-directed web development after diverse roles in prominent CAC40 corporations, refining my strategic acumen by combining technical proficiency with a comprehensive understanding of project dynamics.",
    },
    {
      name: "Paragraph 3",
      content: "Presently, equipped with a web development certificate and a diverse professional background, I am poised to contribute substantively as a developer, adept communicator, and collaborative team member.",
    },
  ],
  portrait: {
    name: "Portrait",
    image: portrait,
  },
};


const skills = {
  title: "My Skills",
  technologies: [
    {
      name: "HTML 5",
      icon: FaHtml5,
    },
    {
      name: "CSS 3",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: BiLogoJavascript,
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      name: "React JS",
      icon: FaReact,
    },
    {
      name: "Express JS",
      icon: SiExpress,
    },
    {
      name: "Redux",
      icon: SiRedux,
    },
    {
      name: "TailwindCSS",
      icon: BiLogoTailwindCss,
    },
    {
      name: "Node JS",
      icon: FaNodeJs,
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
    },
    {
      name: "Three JS",
      icon: TbBrandThreejs,
    },
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "Figma",
      icon: FaFigma,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Next JS",
      icon: TbBrandNextjs,
    },
  ]
};

const projects = {
  title: "What I Have Done So Far",
  list: [
    {
      name: "Ystra",
      description:
        "Art-selling platform specialized in on-demand printing of AI-generated artworks, Ystra provides a unique bridge between cutting-edge technology and creative expression.",
      techs: [
        {
          name: "MongoDB",
          icon: BiLogoMongodb,
        },
        {
          name: "Node JS",
          icon: FaNodeJs,
        },
        {
          name: "Express JS",
          icon: SiExpress,
        },
        {
          name: "JavaScript",
          icon: BiLogoJavascript,
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
        },
        {
          name: "React Native",
          icon: FaReact,
        },
        {
          name: "Expo Go",
          icon: SiExpo,
        },
        {
          name: "Redux",
          icon: SiRedux,
        },
      ],
      image: ystra,
      more_info: {
        cta: "Learn more",
        url: "/projects/ystra",
      },
      repo: {
        name: "Github",
        url: "https://github.com/stars/cpaulwk/lists/ystra",
        icon: FaGithub,
      },
      repo_icon: FaGithub,
      project_link: "https://youtu.be/afV12tpdOWA",
    },
    {
      name: "Vinio",
      description:
        "A web application dedicated to simplify the art of wine pairing, eliminating the need for extensive wine education, Vinio provides quick and effective answers on how to pair wines.",
      techs: [
        {
          name: "Mysql",
          icon: SiMysql,
        },
        {
          name: "Node JS",
          icon: FaNodeJs,
        },
        {
          name: "Express JS",
          icon: SiExpress,
        },
        {
          name: "JavaScript",
          icon: BiLogoJavascript,
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
        },
        {
          name: "React JS",
          icon: FaReact,
        },
        {
          name: "TailwindCSS",
          icon: BiLogoTailwindCss,
        },
        {
          name: "Nextjs",
          icon: TbBrandNextjs,
        },
        {
          name: "Vercel",
          icon: SiVercel,
        },
      ],
      image: vinio,
      more_info: {
        cta: "Learn more",
        url: "/projects/vinio",
      },
      repo: {
        name: "Github",
        url: "https://github.com/stars/cpaulwk/lists/vinio",
        icon: FaGithub,
      },
      project_link: "https://vinio-frontend.vercel.app/",
    },
  ]
};

const socials = {
  title: "Let's connect!",
  buttons: [
    {
      name: "Github",
      icon: FaGithub,
      url: "https://github.com/cpaulwk",
    },

    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/paulwkchow/",
    },
  ],
};


export { hero, introduction, skills, projects, socials }
