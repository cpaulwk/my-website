"use client"
import { ProjectPage } from '@/app/src/components'
import { ystraNavigation, ystraHero, ystraQa, ystraPreview, ystraCta } from '@/app/src/constants'

const Ystra = () => {
  return (
    <>
      <ProjectPage
        navigation={ystraNavigation}
        hero={ystraHero}
        qa={ystraQa}
        preview={ystraPreview}
        cta={ystraCta}
      />
    </>
  )
}

export default Ystra
