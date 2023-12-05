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

import { portrait } from "@/public/images";

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
  description: ["Raised within a family of merchants, my academic journey at the business school was significantly influenced by its adjacency to an engineering institution, instilling in me a profound passion for programming and advanced technologies.", " Over a year ago, I transitioned into self-directed web development after diverse roles in prominent CAC40 corporations, refining my strategic acumen by combining technical proficiency with a comprehensive understanding of project dynamics.", "Presently, equipped with a web development certificate and a diverse professional background, I am poised to contribute substantively as a developer, adept communicator, and collaborative team member."],
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
      icon: "html",
    },
    {
      name: "CSS 3",
      icon: "css",
    },
    {
      name: "JavaScript",
      icon: "javascript",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "React JS",
      icon: "reactjs",
    },
    {
      name: "Redux Toolkit",
      icon: "redux",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind",
    },
    {
      name: "Node JS",
      icon: "nodejs",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
    {
      name: "Three JS",
      icon: "threejs",
    },
    {
      name: "git",
      icon: "git",
    },
    {
      name: "figma",
      icon: "figma",
    },
    {
      name: "prisma",
      icon: "prisma",
    },
    {
      name: "mysql",
      icon: "mysql",
    },
    {
      name: "nextjs",
      icon: "nextjs",
    },
  ]
};

const projects = {
  title: "What I Have Done So Far",
  projects: [
    {
      name: "Ystra",
      description:
        "Art-selling platform specialized in on-demand printing of AI-generated artworks, Ystra provides a unique bridge between cutting-edge technology and creative expression.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openai",
          color: "golden-text-gradient",
        },
      ],
      // image: ystra,
      source_code_link: "https://github.com/stars/cpaulwk/lists/ystra",
      project_link: "https://youtu.be/afV12tpdOWA",
    },
    {
      name: "Vinio",
      description:
        "Web application dedicated to simplify the art of wine pairing, eliminating the need for extensive wine education, Vinio provides quick and effective answers on how to pair wines.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nextjs",
          color: "golden-text-gradient",
        },
      ],
      // image: vinio,
      source_code_link: "https://github.com/stars/cpaulwk/lists/vinio",
      project_link: "https://vinio-frontend.vercel.app/",
    },
    {
      name: "Ystra 2.0",
      description:
        "The web version of Ystra. Currently still on development. This project will be a solo project with simpler features, where user can test and leave the platform without login.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openai",
          color: "golden-text-gradient",
        },
      ],
      // image: ystra2,
      source_code_link: "https://github.com/stars/cpaulwk/lists/ystra",
      project_link: "https://github.com/stars/cpaulwk/lists/ystra",
    },
  ]
};

const socials = {
  title: "Let's connect!",
  buttons: [
    {
      name: "Github",
      icon: "github",
    },

    {
      name: "LinkedIn",
      icon: "linkedin",
    },
  ],
};


export { hero, introduction, skills, projects, socials }
