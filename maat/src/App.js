import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Searchbar from './components/Searchbar'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ searchName, setSearchName ] = useState('')
  
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

  const toggleVisibilityOf = country => {
    const { name } = country
    const div = document.getElementById(name)
    div.style.display = div.style.display === "none" ? "block" : "none"
  }

  return (
    <div>
      <Searchbar handleSearchBarChange={handleSearchBarChange} />
      <Countries countries={countries} toggleVisibilityOf={toggleVisibilityOf} />
    </div>
  )
}

export default App