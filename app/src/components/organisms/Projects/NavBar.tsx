"use client"
import Link from 'next/link'
import { navNavigation } from '@/app/src/constants'
import { useNavBarSettings } from '@/app/src/hooks'

const NavBar = ({ navigation }) => {
  const { nextProject, previousProject } = useNavBarSettings({ navigation, navNavigation });

  return (
    <nav className="bg-[#444444] py-2 max-w-screen grid grid-cols-12 justify-between">
      <div className="col-start-1 col-end-2 flex items-center pl-4">
        <Link
          href="/"
          className="bg-theme-gray rounded-lg p-3 text-theme-white flex justify-center items-center gap-x-2"
        >
          {navNavigation.icons[0].icon({ color: '#ebf2fa', fontSize: '1em' })}
        </Link >
      </div>

      <div className="col-start-2 col-end-12 flex justify-center items-center gap-x-4">
        <Link
          href={`/projects/${previousProject}`}
          className={previousProject ? "bg-theme-gray rounded-lg py-2 px-4 text-theme-white flex justify-center items-center gap-x-2" : "hidden"}
        >
          {navNavigation.icons[1].icon({ color: '#ebf2fa', fontSize: '1em' })}
          <p>Previous Project</p>

        </Link>
        <Link
          href={`/projects/${nextProject}`}
          className={nextProject ? "bg-theme-gray rounded-lg py-2 px-4 text-theme-white flex justify-center items-center gap-x-2" : "hidden"}
        >
          <p>Next Project</p>
          {navNavigation.icons[2].icon({ color: '#ebf2fa', fontSize: '1em' })}

        </Link>
      </div>

      <div className="">
      </div>


    </nav >
  )
}

export default NavBar
