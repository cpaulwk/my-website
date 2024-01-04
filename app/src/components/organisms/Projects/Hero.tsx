import Image from 'next/image'

const Hero = ({ hero }) => {
  return (
    <section className="bg-theme-gray min-h-screen max-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full h-full gap-y-6 px-16 pb-16">
        <div className="flex w-screen h-screen p-8">
          <div className="relative w-full h-full">
            <Image src={hero.image} fill={true} style={{ objectFit: "cover" }} alt={hero.title} />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="text-theme-white w-full">{hero.title}</h1>
          <div className="flex gap-x-6">
            <p className="text-theme-white text-2xl w-full text-justify">{hero.description}</p>
            <div className="flex flex-wrap gap-y-6">
              {hero.technologies.map((tech, i) => {
                return (
                  <div key={i} className="flex flex-col min-w-[95px] justify-center items-center skills4P:basis-1/4 sm:basis-1/3 xs:basis-1/2 basis-full max-xs:grow">
                    {tech.icon({ color: '#ebf2fa', fontSize: '3em' })}
                    <p className="text-theme-white">{tech.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
