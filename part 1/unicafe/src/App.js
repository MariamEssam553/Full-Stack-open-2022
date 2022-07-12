/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
 
const DisplayTitle = ({text}) => {
  console.log('DisplayTitle' , text);
  return(
  <h1> {text} </h1>
  )
}

const DisplayText = (props) => {
  console.log('DisplayText',props);
  return(
    <div> {props.text} </div>
  )
}

const Button = (props) => {
  console.log('Button',props);
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+bad+neutral
  const average = (good+bad+neutral) / 3
  const positive = ( good / (good+bad+neutral) ) * 100

  const Good_handleOnClick = () => setGood(good + 1)
  const Neutral_handleOnClick = () => setNeutral(neutral + 1)  
  const Bad_handleOnClick = () => setBad(bad + 1)
  return (
    <div>
      <DisplayTitle text="Give feedback" />
      <Button onClick={Good_handleOnClick} text="Good" />
      <Button onClick={Neutral_handleOnClick} text="Neutral" />
      <Button onClick={Bad_handleOnClick} text="Bad" />
      <DisplayTitle text="Statistics" />
      <DisplayText text= {"Good " + good} />
      <DisplayText text={"Neutral " + neutral} />
      <DisplayText text={"Bad " + bad} />
      <DisplayText text={"All " + all} />
      <DisplayText text={"Average " + average} />
      <DisplayText text={"Positive " + positive + " %"} />
      
    </div>
  );
}

export default App;
