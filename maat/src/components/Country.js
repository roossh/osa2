import React from 'react'
import Language from './Language'
import Button from './Button'

const Country = ({country, visible, toggleVisibility}) => {

    const { name, flag, languages, capital, population } = country

    const rows = () => languages.map(language =>
    <Language key={name} language={language.name} />)
    const style = visible ? "block" : "none"
    return(
      <span key={country.alpha2Code}>
        <h1>{name}</h1><Button handleClick={toggleVisibility} visible={visible} />
        <div id={name} key={name} style={{display:style}}>
          <ul key={capital}>capital {capital}</ul>
          <ul key={population}>population {population}</ul>
          <h2>languages</h2>
          {rows()}
          <ul key={name}><img style={{width:'175px', height:'125px'}} src={flag} /></ul>
        </div>
      </span>
      )
    
}

export default Country