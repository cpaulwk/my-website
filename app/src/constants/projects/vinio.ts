import {
  FaNodeJs,
  FaReact,
} from "react-icons/fa"

import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi"

import {
  TbBrandNextjs,
} from "react-icons/tb"

import {
  SiExpress,
  SiMysql,
  SiVercel,
} from "react-icons/si"

import {
  vinio,
  vinio_pairing_mode,
  vinio_suggestion_mode,
} from "@/public/images"

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
  shape10,
} from "@/public/hero/shapes"

const navigation = {
  page: "vinio",
}

const hero = {
  image: vinio,
  title: "Vinio",
  description: "Vinio is a web application built to simplify the art of wine pairing, eliminating the need for extensive wine education, by providing quick and effective answers on how to pair wines.",
  technologies: [
    {
      name: "MySQL",
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
      name: "Next JS",
      icon: TbBrandNextjs,
    },
    {
      name: "Vercel",
      icon: SiVercel,
    },
  ],
};

const qa = {
  title: "My thoughts",
  thoughts: [
    {
      question: "Why did I choose this tech stack?",
      answer: ["The choice for this tech stack involved leveraging the relationship between data using MySQL, which helped me build a more intuitive database. React, with its state management features, proved very handy in updating components whenever we interacted with the 'translator-like' interface. Next.js played a crucial role in optimizing page loading through server-side rendering of the landing page."],
      images: [
        {
          name: "Shape 3",
          source: shape3,
        },
        {
          name: "Shape 5",
          source: shape5,
        },
        {
          name: "Shape 9",
          source: shape9,
        },
        {
          name: "Shape 1",
          source: shape1,
        },
        {
          name: "Shape 10",
          source: shape10,
        },
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 2",
          source: shape2,
        },
        {
          name: "Shape 6",
          source: shape6,
        },
        {
          name: "Shape 7",
          source: shape7,
        },
      ]
    },
    {
      question: "What do I want to achieve?",
      answer: [
        "I wanted to create a mobile-friendly web app inspired by translation apps like deepl.com and Google Translate. It's designed for on-the-go moments, whether I'm at a restaurant or in the supermarket. The app has two modes: 'pairing mode,' where I input a wine and a food to find the perfect match, and 'suggestion mode' where I input a wine to get a list of compatible foods. The goal is to simplify the wine and food experience, making it easy and enjoyable when I'm out with just my phone and an internet connection.",
      ],
      images: [
        {
          name: "Shape 1",
          source: shape1,
        },
        {
          name: "Shape 6",
          source: shape6,
        },
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 3",
          source: shape3,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
        {
          name: "Shape 5",
          source: shape5,
        },
        {
          name: "Shape 7",
          source: shape7,
        },
        {
          name: "Shape 10",
          source: shape10,
        },
        {
          name: "Shape 9",
          source: shape9,
        },
      ]
    },
    {
      question: "What are the main difficulties I faced?",
      answer: [
        "I faced two key challenges in this project. First, sourcing and interpreting data from oenology books and online resources presented difficulties due to occasional discrepancies. Making informed choices before integrating information into my database was crucial. Second, obtaining certain data proved challenging due to reluctance within the exclusive wine industry. On the frontend, I chose to build components from scratch for learning purposes instead of using pre-made libraries. This decision, while rewarding, brought its own set of challenges, particularly in successfully managing data handling and fetching from the backend.",
      ],
      images: [
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
        {
          name: "Shape 2",
          source: shape2,
        },
        {
          name: "Shape 9",
          source: shape9,
        },
        {
          name: "Shape 3",
          source: shape3,
        },
        {
          name: "Shape 5",
          source: shape5,
        },
        {
          name: "Shape 10",
          source: shape10,
        },
        {
          name: "Shape 6",
          source: shape6,
        },
        {
          name: "Shape 1",
          source: shape1,
        },
      ]
    },
    {
      question: "What did I learn?",
      answer: [
        "Before this project, my database skills were limited to NoSQL databases like MongoDB. Taking on this project provided a golden opportunity to explore SQL and relational databases, dedicating about half of my time to mastering MySQL. I delved into concepts such as data modeling, hierarchical data, recursive queries, and associative tables, crucial for shaping the Vinio database. Learning proved challenging but rewarding, as I took a hands-on approach, building Vinio alongside my journey. Despite being familiar with the Node environment, I chose Prisma ORM to stay within the Node ecosystem, adding another layer of enrichment to my learning experience, gaining valuable insights into data fetching and handling from a different perspective.",
      ],
      images: [
        {
          name: "Shape 9",
          source: shape9,
        },
        {
          name: "Shape 1",
          source: shape1,
        },
        {
          name: "Shape 5",
          source: shape5,
        },
        {
          name: "Shape 7",
          source: shape7,
        },
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 2",
          source: shape2,
        },
        {
          name: "Shape 3",
          source: shape3,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
        {
          name: "Shape 6",
          source: shape6,
        },
      ]
    },
  ]
};

const preview = {
  title: "Explanations",
  images: [
    {
      name: "Vinio suggestion mode",
      source: vinio_suggestion_mode,
    },
    {
      name: "Vinio pairing mode",
      source: vinio_pairing_mode,
    },
  ],
}

const cta = {
  title: "Visit the web application",
  buttons: [
    {
      name: "Repository",
      url: "https://github.com/stars/cpaulwk/lists/vinio",
    },
    {
      name: "Deployment",
      url: "https://vinio-frontend.vercel.app",
    },
  ]
};


export { navigation, hero, qa, preview, cta }
