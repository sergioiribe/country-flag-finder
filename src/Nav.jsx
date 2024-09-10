import {useContext, useState} from 'react'
import { FiMoon, FiSun } from "react-icons/fi"
import { DarkModeContext} from './DarkModeContext.jsx'


export const Nav = () => {

  const {darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`h-[15vh] bg-white flex px-5 justify-between md:h-[10vh] md:px-14 ${darkMode ? 'bg-darklight' : 'bg-white'}`}>
        <h1 className={`text-black font-bold items-center flex ${darkMode ? 'text-white' : 'text-black'}`}>Where is the world?</h1>
        <button className='flex justify-center items-center gap-2' onClick={toggleDarkMode}>
          {darkMode ? <div className={`flex justify-center items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}><FiSun /> <p>Light Mode</p></div> : <div className={`flex justify-center items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}><FiMoon /> <p>Dark Mode</p></div>}
        </button>
    </div>
  )
}
