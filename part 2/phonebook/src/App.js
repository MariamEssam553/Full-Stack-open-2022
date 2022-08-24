import { useState , useEffect} from 'react'
//import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Person from './Components/Person'
import personService from './services/person'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum]= useState('')
  const [newFilter, setFilter] =useState('')
  // const [filterdArray, setfilterdArray]= useState([])

  useEffect(()=> {
    console.log('effect')
    personService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  } , [])
  
  console.log('render',persons.length, 'persons')

  const addName = (event) =>{
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNum,
      //id: persons.length
    }

    if (persons[persons.length-1 ].name === nameObj.name){
      alert(nameObj.name + " is already added to phonebook ")
      setNewName('')
      setNewNum('')
    } 
    else {
      //persons.push(nameObj) 
      personService.create(nameObj)
      setPersons(persons.concat(nameObj))
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

  const toggleDeleteOf = (id) => {
    return(
      console.log('person ' + id + ' needs to be deleted')
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNum} nameChange={handleNameChange} numberChange={handleNumChange} onSubmit={addName} />
      <h3>Numbers</h3>
      {filteredArray.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} toggleDelete={() => toggleDeleteOf(person.id)} />)}
    </div>
  )
}

export default App