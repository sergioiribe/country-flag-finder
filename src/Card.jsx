import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DarkModeContext} from './DarkModeContext.jsx'
import {SearchContext} from './searchContext.jsx'


export const Card = ({ country }) => {

    const {darkMode} = useContext(DarkModeContext)
    const {searchTerm , selectedRegion } = useContext(SearchContext)

    const [data, setData] = useState([])  
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true); // Inicia la carga
        const fetchCountries = async () => {
          try {
            let response;
            if (searchTerm) {
              // Buscar países por término
              response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
            } else {
              // Cargar todos los países si no hay búsqueda
              response = await axios.get('https://restcountries.com/v3.1/all');
            }
            setData(response.data);
          } catch (error) {
            console.error('Hubo un error al cargar los países', error);
          } finally {
            setLoading(false); // Finaliza la carga
          }
        };
    
        fetchCountries();
      }, [searchTerm]);

    const filteredCountries = data.filter(country => {
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true
        return matchesRegion
    })

    const sortedCountries = filteredCountries.sort((a, b) => {
        // Convertimos ambos nombres a minúsculas para evitar problemas de sensibilidad a mayúsculas/minúsculas
        const searchTermLower = searchTerm.toLowerCase();
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
      
        // Si el término de búsqueda aparece al inicio del nombre del país
        const aStartsWith = nameA.startsWith(searchTermLower);
        const bStartsWith = nameB.startsWith(searchTermLower);
      
        // Si ambos empiezan con el término o ambos no lo hacen, hacemos una comparación normal
        if (aStartsWith && !bStartsWith) {
          return -1;  // a tiene prioridad
        } else if (!aStartsWith && bStartsWith) {
          return 1;   // b tiene prioridad
        } else {
          // Si ninguno de los dos empieza con el término, ordenamos alfabéticamente
          return nameA.localeCompare(nameB);
        }
      });

    if (loading) {
        return <div className={`flex-grow  w-[100%] flex justify-center items-center min-h-0 ${darkMode ? `bg-dark`: `bg-gray-100`}`}>
        <p className={`text-2xl ${darkMode ? `text-white` : `text-black`}`}>Loading...</p>
      </div>
      }
    

    return ( 
        <div className=' mt-10 w-[100vw] flex justify-center items-center md:items-start flex-col gap-10 md:flex-row md:flex-wrap md:justify-center lg:justify-between md:w-[90%] md:mx-auto pb-10'>
            {sortedCountries.map((country, index) => {
                return (
                    <Link
                    to={`/country/${country.name.common}`}  // Redirige a la página de detalles del país
                    key={index}
                    className={`w-[80%] md:w-[250px] flex justify-center flex-col rounded-xl shadow-xl ${darkMode ? 'bg-darklight' : 'bg-white'}`}
                  >
                    <div className='md:min-h-[150px]'>
                      <img className={`rounded-t-xl`} src={country.flags.svg} alt={`${country.name.common} flag`} />
                    </div>
                    <div className='min-h-[150px] flex flex-col justify-center text-start px-5 gap-3'>
                      <h1 className={`font-bold text-2xl md:text-lg ${darkMode ? 'text-white' : 'text-black'}`}>{country.name.common}</h1>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Population:</strong> {country.population.toLocaleString()}</p>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Region:</strong> {country.region}</p>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
                    </div>
                  </Link>
                )
            })}
        </div>
    )
}