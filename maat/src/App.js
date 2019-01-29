import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Searchbar = ({searchName, handleSearchBarChange}) => {
  return (
    <p>find countries: <input value={searchName} onChange={handleSearchBarChange} /></p>
  )
}

const Countries = ({countries}) => {
  const countriesToShow = countries.filter(country => country.show)
  if (countriesToShow.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  if (countriesToShow.length === 1) {
    const rows = () => countriesToShow.map(country => 
    <Country name={country.name} flag={country.flag} languages={country.languages} capital={country.capital} population={country.population} show={true} />)
    return(
      <p key="countries">{rows()}</p>
    )
  }
  const rows = () => countriesToShow.map(country =>
    <Country name={country.name} flag={country.flag} languages={country.languages} capital={country.capital} population={country.population} show={false} />)
  return (
    <p key="countries">{rows()}</p>
  )
}

const Country = ({name, flag, languages, capital, population, show}) => {
  if (show) {
    const rows = () => languages.map(language =>
    <Language language={language.name} />)
    return(
      <div id="countryInfo">
        <h1>{name}</h1>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h2>languages</h2>
        {rows()}
        <p><img style={{width:'50px', height:'50px'}} src={flag} /></p>
      </div>

    )
  }
  return (
    <p key={name}>{name}</p>
  )
}

const Language = ({language}) => {
  return(
    <li>{language}</li>
  )
}

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

  return (
    <div>
      <Searchbar handleSearchBarChange={handleSearchBarChange} />
      <Countries countries={countries} />
    </div>
  )
}

export default App