import { IoHomeSharp, IoCogSharp, IoApps } from 'react-icons/io5'

export default function NavBar() {
  return (
    <div className="grid w-screen h-fit ease-in-out duration-200 z-50 absolute bottom-0 md:top-0">
      <nav className="max-h-[75px] z-30 px-2 sm:px-4 pb-3 content-center top-0 shadow dark:shadow-slate-800 dark:bg-[#23222A] dark:text-white bg-[#ececec]">
        <div className="max-h-[75px] container flex flex-wrap items-center justify-between mx-auto">
          <p className="hidden md:block pt-3">App Title</p>
          <div className="max-h-[75px] w-full md:w-fit flex items-center md:order-2">
            <ul className="flex flex-row justify-between md:justify-normal w-full md:w-fit pt-4 px-4 rounded-lg space-x-6 md:space-x-8 md:text-sm md:font-medium md:border-0 content-center">
              <div className="grid">
                <IoHomeSharp className="text-3xl justify-self-center md:hidden" />
                <h1 className="text-lg">Home</h1>
              </div>
              <div className="grid">
                <IoApps className="text-3xl justify-self-center md:hidden" />
                <h1 className="text-lg">About</h1>
              </div>
              <div className="grid">
                <IoCogSharp className="text-3xl justify-self-center md:hidden" />
                <h1 className="text-lg">Settings</h1>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
