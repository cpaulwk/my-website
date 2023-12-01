"use client";
import Image from 'next/image'
import { hero } from "@/app/src/constants/home/home";
import SectionWrapper from "@/app/src/components/atoms/SectionWrapper";
import { useDivWidth, useShapeSettings } from "@/app/src/hooks"

export default function Home() {

  const divWidth = useDivWidth("title");
  const { shapeNumber, shapeSize } = useShapeSettings(divWidth);

  const heroDescription = hero.description.map((content, i) => {
    return (
      <p key={i} className="text-center">{content.name}</p>
    )
  });

  const heroImage = hero.shapes.slice(0, shapeNumber).map((shape, i) => {
    return (
      <div key={i}>
        <Image src={shape.icon} height={shapeSize} width={shapeSize} alt={shape.name} />
      </div>
    )
  });



  return (
    <section className={`bg-white h-screen min-h-screen w-screen text-theme-light-blue flex flex-col items-center justify-center`}>
      <SectionWrapper>
        <div className="flex flex-col gap-24 max-sm:gap-8">
          <div className="flex flex-col grow items-center w-full">
            <h1 id="title" className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl 2xs:text-3xl 3xs:text-2xl">{hero.title}</h1>
            <div className={`flex w-full justify-between max-3xs:flex-col`} style={{ width: `${divWidth}px` }}>
              {heroDescription}
            </div>
          </div>

          <div className="flex flex-wrap justify-center" style={{ width: `${divWidth}px` }}>{heroImage}</div>
        </div>
      </SectionWrapper>
    </section>
  )
}
