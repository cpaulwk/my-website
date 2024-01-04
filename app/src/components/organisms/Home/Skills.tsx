import { SectionWrapper } from '@/app/src/components'
import { skills } from '@/app/src/constants/home/home'

const Skills = () => {

  return (
    <section className="flex justify-center items-center bg-theme-light-blue text-theme-green max-w-screen">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-theme-white">{skills.title}</h1>
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-between gap-y-6">
              {skills.technologies.map((tech, i) => {
                return (
                  <div key={i} className="flex flex-col min-w-[90px] justify-center items-center skills8:basis-[12.5%] skills4:basis-1/4 skills2:basis-1/2 max-skills2:basis-full max-skills2:grow">
                    {tech.icon({ color: '#ebf2fa', fontSize: '2em' })}
                    <p className="text-theme-green">{tech.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ SectionWrapper>
    </section >
  )
}

export default Skills
