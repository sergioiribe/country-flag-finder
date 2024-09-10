import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { DarkModeContext } from './DarkModeContext';
import { SearchContext } from './searchContext';

export const SearchBar = () => {

    const {darkMode} = useContext(DarkModeContext)
    const {searchTerm, setSearchTerm, selectedRegion, setSelectedRegion} = useContext(SearchContext)

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const handleRegionChange = (e) => {
        e.preventDefault()
        setSelectedRegion(e.target.value)
    }

  return (
    <div className='mt-5 w-[100%] flex justify-center '>
        <div className='flex w-[90%] flex-col md:flex-row justify-between'>
            <div className={`relative w-full md:w-[40%]`} >
                <FaSearch className={`absolute top-1/2 left-3 transform -translate-y-1/2 ${darkMode ? 'text-white' : 'text-gray-500'}`} />
                <input
                    value={searchTerm}
                    onChange={handleSearch}
                    type='text'
                    placeholder='Search for a country...'
                    className={`pl-10 p-3 w-full h-[50px] rounded-md shadow-lg ${darkMode ? `text-white bg-darklight` : `text-gray-500 bg-white`}`}
                />
            </div>
            <div className='relative w-[50%] h-[50px] rounded-lg mt-[25px] shadow-md md:mt-0 md:w-[15%]'>
            <select value={selectedRegion} onChange={handleRegionChange} name="" id="" className={`appearance-none w-[100%] h-full px-3 rounded-lg ${darkMode ? `text-white bg-darklight` : `text-black bg-white`}`}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <MdOutlineExpandMore className={`absolute top-1/2 right-3 transform -translate-y-1/2 ${darkMode ? `text-white bg-darklight` : `text-black bg-white`}`} />
            </div>
        </div>
    </div>
  )
}
