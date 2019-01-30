import React from 'react'
import Country from './Country'

const Countries = ({countries, showCountry, setShowCountry, handleClick}) => {
    const countriesToShow = countries.filter(country => country.show)
    if (countriesToShow.length > 10) {
      return (
        <p key="countries">Too many matches, specify another filter</p>
      )
    }
  
    if (countriesToShow.length === 1) {
      const rows = () => countriesToShow.map(country => 
      <Country country={country} show={true} handleClick={handleClick} />)
      return(
        <p key="countries">{rows()}</p>
      )
    }
    const rows = () => countriesToShow.map(country =>
      <Country country={country} show={false} handleClick={handleClick} />)
    return (
      <p key="countries">{rows()} </p>
    )
}

export default Countries