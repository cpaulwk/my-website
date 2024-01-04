import Image from 'next/image'
import { introduction } from '@/app/src/constants/home/home'
import { SectionWrapper } from '@/app/src/components'

const Introduction = () => {

  return (
    <section id="introduction" className="flex items-center justify-center bg-theme-dark-blue max-w-screen text-theme-white">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-theme-green">{introduction.title}</h1>
          <div className="flex justify-around items-center w-full gap-y-8 sm:flex-row flex-col-reverse">
            <div className="flex flex-col gap-8 sm:w-1/2">

              {introduction.description.map((paragraph, i) => {
                return (
                  <p key={i} className="text-justify">{paragraph.content}</p>
                )
              })}

            </div>

            <Image className="w-1/5" src={introduction.portrait.image} alt={introduction.portrait.name} />

          </div>
        </div>
      </SectionWrapper>
    </section >
  )
}

export default Introduction;
