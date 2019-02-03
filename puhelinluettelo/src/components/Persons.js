import React from 'react'
import Person from './Person'

const Persons = ({persons, deletePerson}) => {
    const personsToShow = persons.filter(person => person.show)
    const rows = () => personsToShow.map(person =>
    <Person person={person} key={person.name} deletePerson={deletePerson} />)
    return (
        <div>
        {rows()}
        </div>
    )
}

export default Persons