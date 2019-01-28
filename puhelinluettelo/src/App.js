import React, { useState } from 'react'
//HELL OTHIS IS RIGHT BEFORE DESTROYING EVERTTGUNG
const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    
    return(
        <form onSubmit={addPerson}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange}/>
          numero: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

const Persons = ({persons}) => {
    const personsToShow = persons.filter(person => person.show)
    const rows = () => personsToShow.map(person =>
    <Person person={person}/>)
    return (
        <div>
        {rows()}
        </div>
    )
}

const Person = ({person}) =>  {
    return(
        <p key={person.name}>{person.name} {person.number}</p>
    )
}

const Filter = ({filterPersons, searchName, handleSearchNameChange}) => {
    return(
        <form onChange={filterPersons}>
            <p>rajaa näytettäviä: <input value={searchName} onChange={handleSearchNameChange}/></p>
        </form>
    )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', show: true },
    { name: 'Martti Tienari', number: '040-123456', show: true },
    { name: 'Arto Järvinen', number: '040-123456', show: true },
    { name: 'Lea Kutvonen', number: '040-123456', show: true }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  
  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
          show: true
      }
      let personExists = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
      let numberExists = persons.find(person => person.number.split(" ").join() == personObject.number.split(" ").join())
      if (personExists || numberExists) {
          alert(`Henkilö ${personObject.name} tai numero ${personObject.number} on jo luettelossa`)
      } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
  }

  const filterPersons = (event) => {
      event.preventDefault()
      setShowAll(false)
      persons.filter(p => !p.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(p => p.show = false)
        .filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(p => p.show = true)
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
      setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filterPersons={filterPersons} searchName={searchName} handleSearchNameChange={handleSearchNameChange} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numerot</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App