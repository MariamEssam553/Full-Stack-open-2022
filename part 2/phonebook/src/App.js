import { useState , useEffect} from 'react'
//import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Person from './Components/Person'
import personService from './services/person'
import Notification from './Components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum]= useState('')
  const [newFilter, setFilter] =useState('')
  // const [filterdArray, setfilterdArray]= useState([])
  const [message, setMessage] = useState(null)

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
      personService
      .create(nameObj)
      .then(() => {
        setPersons(persons.concat(nameObj))
        setNewName('')
        setNewNum('')
        setMessage('Added ' + nameObj.name)
        setTimeout(() => { 
          setMessage(null)
        },5000)
      })

    // setPersons(persons.concat(nameObj))
    // setNewName('')
    // setNewNum('')
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
    console.log('person ' + id  + ' needs to be deleted')
    //console.log(persons[id -1])
    if(window.confirm('Delete '+ persons[id -1 ].name)){
      personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm key={persons.length - 1} name={newName} number={newNum} nameChange={handleNameChange} numberChange={handleNumChange} onSubmit={addName} />
      <h3>Numbers</h3>
      {filteredArray.map(person => <Person key={person.name} id={person.id} name={person.name} number={person.number} toggleDelete={() => toggleDeleteOf(person.id , filteredArray)} />)}
    </div>
  )
}

export default App