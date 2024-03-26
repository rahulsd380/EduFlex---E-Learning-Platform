import { useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeToggleBtn = (): JSX.Element => {
    
  const [isLightMode, setLightMode] = useState(true)
  const [isDarkMode, setDarkMode] = useState(false)

  const handleLightToggle: () => void = () => {
    setLightMode(!isLightMode)
    setDarkMode(false)
    setLightMode(true)
  }

  const handleDarkToggle: () => void = () => {
    setDarkMode(!isDarkMode)
    setLightMode(false)
    setDarkMode(true)
  }

  return (
    <div className="">
      <div className="border-gray-600 border rounded-xl h-[45px] flex items-center justify-between px-1">
        {/* <button className="text-white">Light</button>
    <button className="text-white">Dark</button> */}
        <button
          className={`${isLightMode ? 'text-blue-500 rounded-lg bg-[#246BFD1A] px-5 py-1 flex items-center gap-1' : 'text-gray-200 px-5 py-2'} focus:outline-none font-roboto font-normal flex items-center gap-1`}
          onClick={handleLightToggle}
        >
          Light <MdLightMode className='text-yellow-500'/>
        </button>
        <button
          className={`${isDarkMode ? 'text-blue-500 rounded-lg bg-[#246BFD1A] px-5 py-1 flex items-center gap-1' : 'text-gray-200 px-5 py-2'} focus:outline-none font-roboto font-normal flex items-center gap-1`}
          onClick={handleDarkToggle}
        >
          Dark <MdDarkMode className='text-gray-400'/>
        </button>
      </div>
    </div>
  )
}

export default ThemeToggleBtn
