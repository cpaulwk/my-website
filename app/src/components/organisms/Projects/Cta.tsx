"use client"
import { SectionWrapper } from "@/app/src/components"

interface Button {
  name: string;
  url: string;
}

interface CtaProps {
  title: string;
  buttons: Button[];
}

const Cta = ({ cta }: CtaProps) => {
  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section className="bg-theme-light-blue text-theme-white max-w-screen flex flex-col items-center justify-center">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-center">{cta.title}</h1>
          <div className="flex gap-6">
            {cta.buttons.map((btn, i) => {
              return (
                <button key={i} onClick={() => openExternalLink(btn.url)} className={i % 2 === 0 ? `border border-black bg-black text-white rounded-lg py-2 px-4` : `border border-theme-green bg-theme-green text-black rounded-lg py-2 px-4`}>
                  {btn.name}
                </button>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

    </section>
  )
}

export default Cta
