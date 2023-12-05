import Image from 'next/image'
import { introduction } from '../../constants/home/home';
import { SectionWrapper } from '..';

const Introduction = () => {
  return (
    <section className="flex items-center justify-center bg-theme-dark-blue max-w-screen">
      <SectionWrapper>
        <div className="flex flex-col h-full w-full items-center gap-8">
          <h1 className="text-theme-green">{introduction.title}</h1>
          <div className="flex justify-around items-center w-full">
            <div className="flex flex-col gap-8 w-1/2">
              {introduction.description.map((text) => {
                return (
                  <p className="indent-[10%] text-justify text-theme-white">{text}</p>
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
