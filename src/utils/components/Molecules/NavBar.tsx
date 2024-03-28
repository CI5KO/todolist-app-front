import { Anchor } from '..'

import { IoHomeSharp, IoSettingsOutline, IoApps } from 'react-icons/io5'
import { type AvailableLang } from '@/utils/lang'

interface NavBarProps {
  lang?: AvailableLang
  dictionary?: any
}

export default function NavBar({ lang, dictionary }: NavBarProps): JSX.Element {
  return (
    <div className="grid w-screen h-fit ease-in-out duration-200 z-50 fixed bottom-0 md:top-0">
      <nav className="max-h-[75px] z-30 px-2 sm:px-4 pb-3 content-center top-0 shadow dark:shadow-slate-800 dark:bg-[#23222A] bg-[#e5e5e5]">
        <div className="max-h-[75px] container flex flex-wrap items-center justify-between mx-auto">
          <p className="hidden md:block pt-3">App Title</p>
          <div className="max-h-[75px] w-full md:w-fit flex items-center md:order-2">
            <ul className="flex flex-row justify-between md:justify-normal w-full md:w-fit pt-4 px-4 rounded-lg space-x-6 md:space-x-8 md:text-sm md:font-medium md:border-0 content-center">
              <Anchor path="home" lang={lang} Icon={IoHomeSharp} />
              <Anchor path="about" lang={lang} Icon={IoApps} />
              <Anchor path="settings" lang={lang} Icon={IoSettingsOutline} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
