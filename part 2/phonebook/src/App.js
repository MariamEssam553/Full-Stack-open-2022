import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 } 
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum]= useState('')
  const [Filter, setFilter] =useState('')
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

  const filteredArray = Filter ?
  persons.filter(person => person.name.toLowerCase().includes(Filter.toLowerCase())) :
  persons
      
  
// 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={Filter} onChange={handleFilterChange}  />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(person => <div key={person.name}>{person.name + ' ' + person.number}</div>)} */}
      {filteredArray.map(person => <div key={person.name}>{person.name + ' ' + person.number}</div>)} {/*Important*/}
    </div>
  )
}

export default App