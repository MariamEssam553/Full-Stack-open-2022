import React from "react";

const Display = ({countriesChosen, Filter}) => {
    //console.log('In Display component')
    //const countriesChosen = countries.filter(country => country.name.common.toLowerCase().includes(Filter.toLowerCase()))
    //console.log('filter =', Filter)
    //console.log(countriesChosen.length)
    //console.log('countries filterd =', countriesChosen.length )
    if(countriesChosen.length === 1 ){
        console.log('countries filterd =', countriesChosen.length )
        return(
            countriesChosen.map(country => 
            <div key={country.name}>
                <h1>{country.name.official}</h1>
                <div> capital: {country.capital} </div>
                <div> area: {country.area} </div>
                <h2>languages:</h2>
                <ul>
                    {country.languages.map(language => <li key={language.name}> {language.name} </li>)}
                </ul>
                <img scr={country.flags.png}
                 alt={`Flag of ${country.name.common}`} 
                // height="60" 
              //width="60" 
              />
                </div>)
        )
    }
    else if(countriesChosen.length <= 10){
        console.log('countries filterd =', countriesChosen.length )
        return(
       <div>
        {countriesChosen.map(country => <div key={country.name.common}> {country.name.official} </div>)}
       </div> 
        )
    } else if (countriesChosen.length > 10){
        console.log('countries filterd =', countriesChosen.length )
        return(
        <div>
            Too many matches, specify another filter
        </div>
        )
    }

}

export default Display