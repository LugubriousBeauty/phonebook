import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '3426987532' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(p => p.name === newName))
      return alert(`${newName} is already added to phonebook`)
    console.log('button clicked', event.target)
    const Person = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(Person))
    setNewName('')
    setNewNumber('')
  }
  const clearFilter = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setNewFilter('')
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter clearFilter={clearFilter} newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons newFilter={newFilter} persons={persons}/>
    </div>
  )
}


export default App