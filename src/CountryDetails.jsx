import React, { useContext } from 'react'
import { Nav } from './Nav'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import axios from 'axios'
import { DarkModeContext } from './DarkModeContext'

export const CountryDetails = () => {

    const { darkMode } = useContext(DarkModeContext)


    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/name/mexico')
            .then((response) => {
                setCountry(response.data[0])
            })
            .catch((error) => {
                console.error('There was an error!', error)
            })
    }, [])

    return (
        <div className={`  min-h-[100svh] w-[100] ${darkMode ? `bg-dark` : `bg-gray-100 md:bg-white`}`}>
            <Nav />
            <div className={`border-2 shadow-md  ${darkMode ? `border-dark`: `border-gray-100`}`}></div>
            <div className="w-[90%] mt-5 m-auto md:mt-[4%]">
                <div className={`py-2  w-[35%] md:w-[10%] rounded-md shadow-lg flex justify-center items-center ${darkMode ? `bg-darklight`: `bg-white`}`}>
                    <button className={`flex gap-3 items-center `}>
                        <FaArrowLeftLong className={`${darkMode ? `text-white`: `text-black`}`}/>
                        <Link to="/" className={`${darkMode ? `text-white`: `text-black`}`}>Back</Link>
                    </button>
                </div>
                <div className="mt-10  md:mt-[4%]  ">
                    {country ? (
                        <div className="md:flex-row md:flex md:gap-32">
                            <img
                                className="w-full md:max-h-[40vh] md:w-[40%]"
                                src={country.flags.svg}
                                alt=""
                            />
                            

                            <div className='md:w-[40%] md:flex md:flex-col md:justify-center md:gap-5'>
                            <h1 className={`font-bold text-3xl mt-10 md:mt-0 ${darkMode ? `text-white`: `text-black`}`}>
                                    {country.name.common}
                                </h1>
                            <div className='md:flex md:justify-between md:items-start md:h-[50%]'>
                            <div className={`gap-3 mt-5 flex flex-col h-[100%] justify-center md:justify-start ${darkMode ? `text-white`: `text-black`}`}>
                               
                                <p>
                                    <strong>Native Name: </strong>
                                    {Object.entries(country.name.nativeName)[0][1].common}
                                </p>
                                <p>
                                    <strong>Population: </strong> {country.population}
                                </p>
                                <p>
                                    <strong>Region: </strong> {country.region}
                                </p>
                                <p>
                                    <strong>Sub Region: </strong> {country.subregion}
                                </p>
                                <p>
                                    <strong>Capital: </strong> {country.capital[0]}
                                </p>
                            </div>
                            <div className={`mt-10 md:mt-5 gap-3 flex flex-col  md:justify-start ${darkMode ? `text-white`: `text-black`}`}>
                                <p>
                                    <strong>Top Level Domain: </strong> {country.tld[0]}
                                </p>
                                <p>
                                    <strong>Currencies: </strong>
                                    {Object.entries(country.currencies).map(
                                        ([code, currency]) => (
                                            <span key={code}>
                                                {currency.name} ({currency.symbol})
                                            </span>
                                        )
                                    )}
                                </p>
                                <p>
                                    <strong>Languages: </strong>:{' '}
                                    {Object.values(country.languages).join(', ')}
                                </p>
                            </div>
                            </div>
                            <div className={`mt-10 gap-3 flex flex-col md:flex-row md:justify-start md:items-center`}>
                                <p className={`font-bold text-lg md:pb-5 ${darkMode ? `text-white`: `text-black`}`}>Border Countries: </p>
                                <div className={`flex justify-center items-center gap-3 pb-5 flex-wrap md:justify-start md:items-center`}>
                                    {country.borders.map((border, index) => {
                                        return (
                                            <button
                                                 key={index}
                                                className={` shadow-md px-8 py-2 rounded-md ${darkMode ? `text-white bg-darklight`: `text-black bg-white`}`}
                                            >
                                                {border}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
