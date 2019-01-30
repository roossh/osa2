import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Searchbar from './components/Searchbar'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ searchName, setSearchName ] = useState('')
  const [ showCountry, setShowCountry ] = useState(false)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchBarChange = (event) => {
    event.preventDefault()
    setSearchName(event.target.value)
    countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .map(country => country.show = true)
    countries.filter(country => !country.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .map(country => country.show = false)
  }

  const handleClick = (event) => {
    event.preventDefault()
    console.log("hello", event.currentTarget.value)
  }

  return (
    <div>
      <Searchbar handleSearchBarChange={handleSearchBarChange} />
      <Countries countries={countries} showCountry={showCountry} setShowCountry={setShowCountry} handleClick={handleClick} />
    </div>
  )
}

export default App