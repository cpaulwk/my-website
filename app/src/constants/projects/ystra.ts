import {
  FaNodeJs,
  FaReact,
} from "react-icons/fa"

import {
  BiLogoJavascript,
  BiLogoMongodb,
} from "react-icons/bi"

import {
  SiExpo,
  SiExpress,
  SiRedux,
} from "react-icons/si"

import {
  ystra,
  ystra_generated_results_page,
  ystra_cart_page,
} from "@/public/images";

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
  page: "ystra",
}


const hero = {
  image: ystra,
  title: "Ystra",
  description: "Ystra is an art-selling platform specialized in on-demand printing of AI-generated artworks, it provides a unique bridge between cutting-edge technology and creative expression.",
  technologies: [
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
};

const qa = {
  title: "My thoughts",
  thoughts: [
    {
      question: "Why did I choose this tech stack?",
      answer: ["Redux streamlined our state management, ensuring a seamless user experience by maintaining login status. MongoDB efficiently handles user accounts and stores images, paired with the swift performance of the Cloudinary CDN. Opting for React Native enabled us to reach a broader audience, as it effortlessly supports both iOS and Android platforms."],
      images: [
        {
          name: "Shape 5",
          source: shape5,
        },
        {
          name: "Shape 1",
          source: shape1,
        },
        {
          name: "Shape 9",
          source: shape9,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
      ]
    },
    {
      question: "What do I want to achieve?",
      answer: [
        "As a team project, our vision was to harness the potential of generative AI, empowering users to effortlessly create custom printed art on demand. The mobile application was designed for user-friendliness, ensuring compatibility with both Android and iOS platforms. We aimed to put the power in the user's hands, allowing them to seamlessly transform typed words into framed printed art with a simple tap of their finger.",
      ],
      images: [
        {
          name: "Shape 6",
          source: shape6,
        },
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
        {
          name: "Shape 5",
          source: shape5,
        },
      ]
    },
    {
      question: "What are the main difficulties I faced?",
      answer: [
        "I encountered significant challenges in handling states and implementing Redux, particularly due to the added layer of complexity, which becomes more pronounced in a React Native project. Additionally, fetching data from the client side to acquire information from the server side posed further difficulties.",
      ],
      images: [
        {
          name: "Shape 7",
          source: shape7,
        },
        {
          name: "Shape 4",
          source: shape4,
        },
        {
          name: "Shape 8",
          source: shape8,
        },
        {
          name: "Shape 2",
          source: shape2,
        },
      ]
    },
    {
      question: "What did I learn?",
      answer: [
        "While primarily engaged in client-side development, I gained insights into the constraints and limitations of React Native in mobile application development. Yet, I discovered its efficiency in quickly starting a project. In our team project, I grasped the significance of clear communication during pull requests and the importance of peer reviews before merging changes.",
      ],
      images: [
        {
          name: "Shape 2",
          source: shape2,
        },
        {
          name: "Shape 7",
          source: shape7,
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
  ],
};

const preview = {
  title: "Explanations",
  images: [
    {
      name: "Ystra generated results page",
      source: ystra_generated_results_page,
    },
    {
      name: "Ystra cart page",
      source: ystra_cart_page,
    },
  ],
}

const cta = {
  title: "Visit the mobile application",
  buttons: [
    {
      name: "Repository",
      url: "https://github.com/stars/cpaulwk/lists/ystra",
    },
    {
      name: "Video",
      url: "https://youtu.be/afV12tpdOWA",
    },
  ]
};


export { navigation, hero, qa, preview, cta }
