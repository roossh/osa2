import React from 'react'
import Language from './Language'

const Country = ({country, show, handleClick}) => {

    const { name, flag, languages, capital, population } = country
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
          <p><img style={{width:'175px', height:'125px'}} src={flag} /></p>
        </div>
  
      )
    }
    return (
      <p key={name}>{name} <button onClick={handleClick}>show</button></p>
    )
}

export default Country