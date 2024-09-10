import React from 'react'
import { createContext, useState } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('')

  return (
    <SearchContext.Provider value={{searchTerm, setSearchTerm, selectedRegion, setSelectedRegion}}>
        {children}
    </SearchContext.Provider>
  )
}
