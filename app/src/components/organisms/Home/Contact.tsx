"use client"
import { SectionWrapper } from '@/app/src/components'
import { socials } from '@/app/src/constants'

const Contact = () => {
  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section className="flex justify-center items-center bg-black max-w-screen text-theme-white">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1>{socials.title}</h1>
          <div className="flex flex-wrap justify-between gap-y-6">
            {socials.buttons.map((button, i) => {
              return (
                <div key={i} onClick={() => openExternalLink(button.url)} className="flex min-w-[90px] justify-center items-center hover:cursor-pointer">
                  {button.icon({ color: '#ebf2fa', fontSize: '2em' })}
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Contact
