import { Preview, GoBack, HeroProjects, QA, Cta, NavBar } from "@/app/src/components"

const ProjectPage = ({ navigation, hero, qa, preview, cta }) => {

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
