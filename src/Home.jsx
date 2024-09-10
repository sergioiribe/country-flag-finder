import './App.css'
import {Nav} from './Nav'
import {Card} from './Card'
import {SearchBar} from './SearchBar'
import { SearchContext, SearchProvider } from './searchContext'
import { useContext } from 'react'

function Home() {
  

  return (
    <div className='flex flex-col min-h-screen min-w-screen'>
      <Nav/>
      <SearchProvider>
        <SearchBar/>
        <Card/>
      </SearchProvider>
    </div>
  )
}

export default Home
