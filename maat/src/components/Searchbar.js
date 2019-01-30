import React from 'react'

const Searchbar = ({searchName, handleSearchBarChange}) => {
    return (
      <p>find countries: <input value={searchName} onChange={handleSearchBarChange} /></p>
    )
}

export default Searchbar