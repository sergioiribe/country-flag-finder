import React from 'react'
import { Nav } from './Nav'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import axios from 'axios'

export const CountryDetails = () => {
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
        <div className="bg-gray-100 md:bg-white min-h-[100svh] w-[100]">
            <Nav className="border-2 border-shadow" />
            <div className="w-[90%] mt-5 m-auto">
                <div className="py-2 px- bg-white w-[35%] rounded-md shadow-lg flex justify-center items-center">
                    <button className="flex gap-3 items-center">
                        <FaArrowLeftLong />
                        <Link to="/">Back</Link>
                    </button>
                </div>
                <div className="mt-10  md:mt-20  ">
                    {country ? (
                        <div className="md:flex-row md:flex">
                            <img
                                className="w-full md:w-[40%]"
                                src={country.flags.svg}
                                alt=""
                            />

                            <div className="gap-3 mt-5 flex flex-col h-[100%] justify-center">
                                <h1 className="font-bold text-3xl mt-10 md:mt-0">
                                    {country.name.common}
                                </h1>
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
                            <div className="mt-10 gap-3 flex flex-col">
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
                            <div className="mt-10 gap-3 flex flex-col">
                                <p className="font-bold text-lg">Border Countries: </p>
                                <div className="flex justify-center items-center gap-3 pb-5 flex-wrap">
                                    {country.borders.map((border, index) => {
                                        return (
                                            <button
                                                 key={index}
                                                className="bg-white shadow-md px-8 py-2 rounded-md"
                                            >
                                                {border}
                                            </button>
                                        )
                                    })}
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
