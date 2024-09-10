import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { CountryDetails } from './CountryDetails';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext.jsx';

export const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`min-w-[100vw] min-h-[100vh] ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
        <Route path="*" element={<h1 className="p-5">Page not found</h1>} />
      </Routes>
    </div>
  );
};