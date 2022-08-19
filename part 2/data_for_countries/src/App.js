import { useState , useEffect} from 'react'
import axios from 'axios'
import Display from './Components/Display'

const App = () => {
  const [countries , setCountries]=useState([])
  const[newFilter, setNewFilter]=useState('')

  useEffect(() =>{
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
         .then(response => { 
          console.log('promise fulfilled')
          setCountries(response.data)
         })
  },[])
    console.log('response',countries.length,'countries')

    const handlenewFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilter(event.target.value)
    }

    let countriesChosen = newFilter ?
    countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())):
    countries
// 
    // if(countriesChosen.length < 10){
      // countriesChosen = countriesChosen
    // } else if (countriesChosen.length > 10) {
      // countriesChosen='too many matches, specify another filter'
    // }
    
  return (
    <div>
      find countries <input value={newFilter} onChange={handlenewFilterChange}  />
      {/* {countries.map(country => <div key={country.name.common}> {country.name.official} </div>)} */}
      <Display countriesChosen={countriesChosen} Filter={newFilter} />
    </div>
  );
}

export default App;
