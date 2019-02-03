import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName ] = useState('')
  
  useEffect(() => {
      personService
        .getAll()
        .then(response => {
          setPersons(response.data)
        })
  }, [])

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
          show: true
      }
      let personExists = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
      let numberExists = persons.find(person => person.number.split(" ").join() === personObject.number.split(" ").join())
      if (personExists || numberExists) {
          alert(`Henkilö ${personObject.name} tai numero ${personObject.number} on jo luettelossa`)
      } else {
        personService
          .create(personObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
          })
      }
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
      event.preventDefault()
      setSearchName(event.target.value)
      persons.filter(p => !p.name.toLowerCase().includes(event.target.value.toLowerCase()))
        .map(p => p.show = false)
      persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase()))
        .map(p => p.show = true)  
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter searchName={searchName} handleSearchNameChange={handleSearchNameChange} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numerot</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App