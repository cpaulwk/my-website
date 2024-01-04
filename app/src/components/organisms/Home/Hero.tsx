import Image from 'next/image'
import { homeHero } from "@/app/src/constants";
import { SectionWrapper } from '@/app/src/components';

const Hero = () => {

  const heroDescription = homeHero.description.map((content, i) => {
    return (
      <p key={i} className="text-center">{content.name}</p>
    )
  });

  const heroImage = homeHero.shapes.map((shape, i) => {
    return (
      <div key={i} className={i === 9 ? `max-md:hidden` : ""}>
        <Image src={shape.icon} className="2xl:w-[286px] xl:w-[215px] lg:w-[161px] md:w-[107px] sm:w-[134px] xs:w-[112px] 2xs:w-[89px] 3xs:w-[59px] max-3xs:max-w-[53px]" alt={shape.name} />
      </div>
    )
  });

  return (
    <section className="bg-white min-h-screen max-w-screen text-theme-light-blue flex items-center justify-center">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-24 max-sm:gap-8">
          <div className="flex flex-col grow items-center w-full">
            <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl 2xs:text-2xl 3xs:text-lg text-base text-center">{homeHero.title}</h1>
            <div className={`flex w-full justify-between 2xl:w-[1434px] xl:w-[1076px] lg:w-[807px] md:w-[538px] sm:w-[403px] xs:w-[336px] 2xs:w-[269px] 3xs:w-[179px] max-3xs:max-w-[179px] max-2xs:flex-col`}>
              {heroDescription}
            </div>
          </div>

          <div className="flex flex-wrap justify-center 2xl:w-[1434px] xl:w-[1076px] lg:w-[807px] md:w-[538px] sm:w-[403px] xs:w-[336px] 2xs:w-[269px] 3xs:w-[179px] max-3xs:max-w-[179px]">{heroImage}</div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Hero 
