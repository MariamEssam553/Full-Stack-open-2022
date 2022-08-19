import { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 } 
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum]= useState('')
  const [newFilter, setFilter] =useState('')
  // const [filterdArray, setfilterdArray]= useState([])

  const addName = (event) =>{
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNum,
      id: persons.length
    }

    if (persons[persons.length-1 ].name === nameObj.name){
      alert(nameObj.name + " is already added to phonebook ")
      setNewName('')
      setNewNum('')
    } 
    else {
      persons.push(nameObj) //Important
      setPersons(persons)
      setNewName('')
      setNewNum('')
    }

    console.log(persons)
    console.log(newName)
  }

  const handleNameChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => { 
    console.log(event.target.value)
    setFilter(event.target.value)
    }

  const filteredArray = newFilter ?
  persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) : //to make comparison case insensitive
  persons
      
  
// 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNum} nameChange={handleNameChange} numberChange={handleNumChange} onSubmit={addName} />
      <h3>Numbers</h3>
      <Persons array={filteredArray} />
    </div>
  )
}

export default App