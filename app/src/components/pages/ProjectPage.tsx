import { Preview, HeroProjects, QA, Cta, NavBar } from "@/app/src/components"
import { StaticImageData } from "next/image";
import { IconType } from 'react-icons';

interface NavigationProps {
  navigation: {
    page: string,
  }
}

interface Technology {
  name: string;
  icon: IconType;
}

interface HeroProps {
  hero: {
    image: StaticImageData;
    title: string;
    description: string;
    technologies: Technology[];
  }
}

interface PictureQA {
  name: string;
  source: string;
}

interface Thought {
  question: string;
  answer: string[];
  images: PictureQA[];
}

interface QAProps {
  qa: {
    title: string;
    thoughts: Thought[];
  }
}

interface PicturePreview {
  name: string;
  source: StaticImageData;
}

interface PreviewProps {
  preview: {
    title: string;
    images: PicturePreview[];
  }
}

interface Button {
  name: string;
  url: string;
}

interface CtaProps {
  cta: {
    title: string;
    buttons: Button[];
  }
}

const ProjectPage = ({ navigation, hero, qa, preview, cta }: NavigationProps & HeroProps & QAProps & PreviewProps & CtaProps) => {

  return (
    <>
      <NavBar navigation={navigation} />
      <HeroProjects hero={hero} />
      <QA qa={qa} />
      <Preview preview={preview} />
      <Cta cta={cta} />
    </>
  )
}

export default ProjectPage;
