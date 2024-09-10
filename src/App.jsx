import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import { CountryDetails } from './CountryDetails';
import { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './DarkModeContext.jsx';


export const App = () => {
  
  const {darkMode} = useContext(DarkModeContext)

  return (

      <div className={`min-w-[100wv] min-h-[100hv] ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/country" element={<CountryDetails/>}></Route>
        <Route path="*" element={<h1 className='p-5'>Page no found</h1>}></Route>
    </Routes>
    </div>
    
  )
}
