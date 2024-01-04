import { SectionWrapper } from "@/app/src/components"
import Image from "next/image"

const Preview = ({ preview }) => {
  return (
    <section className="bg-theme-dark-blue text-theme-white max-w-screen flex flex-col items-center justify-center">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full justify-center items-center gap-8">

          {preview.images.map((image, i) => {
            return (
              <div key={i} className="flex flex-col justify-center items-center gap-y-6 w-full">
                <h2 className="text-theme-green">{image.name}</h2>
                <Image src={image.source} width={900} alt={image.name} />
              </div>
            )
          })}
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Preview
