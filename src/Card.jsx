import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Card = ({ country }) => {
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
                    <div key={index} className='w-[80%] bg-white flex justify-center flex-col rounded-xl shadow-xl md:w-[250px] md:min-h-[300px]'>
                        <div className='md:min-h-[150px]'>
                            <img className='rounded-t-xl' src={country.flags.svg} alt={`${country.name.common} flag`} />
                        </div>
                        <div className='min-h-[150px] flex flex-col justify-center text-start px-5 gap-3'>
                            <h1 className='font-bold text-2xl md:text-lg'>{country.name.common}</h1>
                            <div className='gap-1'>
                                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}