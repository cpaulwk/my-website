"use client"
import Image from "next/image"
import { SectionWrapper } from '@/app/src/components'
import { projects } from '@/app/src/constants/home/home'
import Link from "next/link"

const Projects = () => {
  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section className="flex justify-center items-center bg-theme-dark-blue max-w-screen text-theme-white">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-theme-green">{projects.title}</h1>
          <div className="flex flex-wrap justify-center gap-x-24 lg:gap-x-16 gap-y-12 w-full">
            {projects.list.map((application, i) => {
              return (
                <div key={i} className="flex flex-col lg:basis-1/2 max-w-[85%] lg:max-w-[45%] gap-y-6">
                  <div className="flex justify-center w-full">
                    <div className="relative">
                      <a
                        href={application.project_link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                          src={application.image}
                          height={300}
                          width={300}
                          style={{ objectFit: "cover" }}
                          alt={application.name}
                          className="aspect-square rounded-xl hover:cursor-pointer"
                        />
                      </a>
                      <a
                        href={application.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 z-10 rounded-full bg-theme-white border-2 border-black p-1 hover:cursor-pointer"
                      >
                        {application.repo.icon({ color: 'black', fontSize: '2em' })}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-theme-green">{application.name}</h2>
                    <p className="text-justify">{application.description}</p>

                    <div className="flex w-full">
                      <Link href={application.more_info.url} className="text-theme-green font-[800]">
                        {application.more_info.cta}
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {application.techs.map((technologie, i) => {
                        return (
                          <div key={i} className="flex flex-col justify-center items-center">
                            {technologie.icon({ color: '#ebf2fa', fontSize: '2em' })}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section >
  )
}

export default Projects
