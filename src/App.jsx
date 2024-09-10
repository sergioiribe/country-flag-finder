import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import { CountryDetails } from './CountryDetails';
import { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './DarkModeContext.jsx';


export const App = () => {
  
  const {darkMode} = useContext(DarkModeContext)

  return (

    <Router basename="/country-flag-finder"> 
    <div className={`min-w-[100vw] min-h-[100vh] ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/country/:countryName" element={<CountryDetails/>}></Route>
        <Route path="*" element={<h1 className='p-5'>Page no found</h1>}></Route>
    </Routes>
    </div>
  </Router>
    
  )
}
