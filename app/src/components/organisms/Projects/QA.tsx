import { SectionWrapper } from "@/app/src/components"
import Image from "next/image"

interface Picture {
  name: string;
  source: string;
}

interface Thought {
  question: string;
  answer: string[];
  images: Picture[];
}

interface QAProps {
  qa: {
    title: string;
    thoughts: Thought[];
  }
}

const QA = ({ qa }: QAProps) => {
  return (
    <section className="bg-theme-white max-w-screen flex flex-col items-center justify-center">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-theme-light-blue">{qa.title}</h1>
          <div className="flex flex-wrap w-full justify-between items-center">
            {qa.thoughts.map((info, i) => {
              return (
                <div key={i} className={i % 2 === 0 ? `flex md:flex-row flex-col w-full min-h-[365px] bg-theme-white` : `flex md:flex-row-reverse flex-col w-full min-h-[365px] bg-white`}>
                  <div className="flex flex-col basis-1/2 p-6 gap-y-4">
                    <h2 className={i % 2 === 0 ? `text-theme-light-blue` : `text-black`}>{info.question}</h2>
                    <div className="flex flex-col gap-6">
                      {info.answer.map((text, i) => {
                        return (
                          <p key={i} className="text-justify">{text}</p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex basis-1/2 justify-center items-center">
                    <div className="flex flex-wrap justify-center items-center max-w-[365px] max-h-[365px] max-md:p-6">
                      {info.images.map((icon, i) => {
                        return (
                          <div key={i} className="flex basis-1/2">
                            <Image src={icon.source} style={{ objectFit: "contain" }} alt={icon.name} />
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
    </section>
  )
}

export default QA
