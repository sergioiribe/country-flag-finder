import React from 'react'
import { FiMoon } from "react-icons/fi";


export const Nav = () => {
  return (
    <div className='w-[100vw] h-[15vh] bg-white flex px-5 justify-between md:h-[10vh] md:px-14'>
        <h1 className='text-black font-bold items-center flex'>Where is the world?</h1>
        <div className='flex justify-center items-center gap-2'>
        <FiMoon />
        
        <p>Dark mode</p>
        </div>
    </div>
  )
}
