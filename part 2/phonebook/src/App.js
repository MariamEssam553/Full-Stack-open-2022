import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number:'39-44-5323523'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum]= useState('')

  const addName = (event) =>{
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNum
    }

    if (persons[persons.length-1 ].name === nameObj.name){
      alert(nameObj.name + " is already added to phonebook ")
      setNewName('')
    } 
    else {
      persons.push(nameObj) //Important
      setPersons(persons)
      setNewName('')
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


  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <div key={person.name}>{person.name + ' ' + person.number}</div>)} {/*Important*/}
    </div>
  )
}

export default App