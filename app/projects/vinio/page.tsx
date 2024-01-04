import { ProjectPage } from '@/app/src/components'
import { vinioNavigation, vinioHero, vinioQa, vinioPreview, vinioCta } from '@/app/src/constants'

const Vinio = () => {
  return (
    <main className="flex flex-col min-h-screen max-w-screen overflow-hidden">
      <ProjectPage
        navigation={vinioNavigation}
        hero={vinioHero}
        qa={vinioQa}
        preview={vinioPreview}
        cta={vinioCta}
      />
    </main>
  )
}

export default Vinio
