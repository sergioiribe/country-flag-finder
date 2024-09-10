import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DarkModeContext} from './DarkModeContext.jsx'


export const Card = ({ country }) => {

    const {darkMode} = useContext(DarkModeContext)

    const [data, setData] = useState([])  // Inicializamos como un array vacío

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error)
            })
    }, [])

    return (
        <div className='mt-10 w-[100vw] flex justify-center items-center md:items-start flex-col gap-10 md:flex-row md:flex-wrap md:justify-center lg:justify-between md:w-[90%] md:mx-auto pb-10'>
            {data.map((country, index) => {
                return (
                    <div key={index} className={`w-[80%] flex justify-center flex-col rounded-xl shadow-xl md:w-[250px] md:min-h-[300px] ${darkMode ? 'bg-darklight' : 'bg-white'}`}>
                        <div className='md:min-h-[150px]'>

                            <img className={`rounded-t-xl`} src={country.flags.svg} alt={`${country.name.common} flag`} />
                        </div>
                        <div className='min-h-[150px] flex flex-col justify-center text-start px-5 gap-3'>
                            <h1 className={`font-bold text-2xl md:text-lg ${darkMode ? 'text-white' : 'text-black'}`}>{country.name.common}</h1>
                            <div className='gap-1'>
                                <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Region:</strong> {country.region}</p>
                                <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}