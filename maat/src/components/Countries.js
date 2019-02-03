import React from 'react'
import Country from './Country'

const Countries = ({countries, toggleVisibilityOf}) => {
    const countriesToShow = countries.filter(country => country.show)
    if (countriesToShow.length > 10) {
      return (
        <div key="countries">Too many matches, specify another filter</div>
      )
    }

    if (countriesToShow.length === 1) {
      const rows = () => countriesToShow.map(country => 
      <Country key={country.alpha3Code} country={country} visible={true} toggleVisibility={() => toggleVisibilityOf(country)} />)
      return(
        <div key="countries">{rows()}</div>
      )
    }

    const rows = () => countriesToShow.map(country =>
      <Country key={country.alpha3Code} country={country} toggleVisibility={() => toggleVisibilityOf(country)} visible={false} />)
    return (
      <div key="countries">{rows()} </div>
    )
}

export default Countries