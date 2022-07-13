import { useState } from 'react'
 
const DisplayTitle = ({text}) => {
  console.log('DisplayTitle' , text);
  return(
  <h1> {text} </h1>
  )
}

// const DisplayText = (props) => {
  // console.log('DisplayText',props);
  // return(
    // <div> {props.text} </div>
  // )
// }

const Button = (props) => {
  console.log('Button',props);
  return(
    <>
      <button onClick={props.onClick1}> {props.text1} </button>
      <button onClick={props.onClick2}> {props.text2} </button>
      <button onClick={props.onClick3}> {props.text3} </button>
    </>
  )
}

const StatisticLine = (props) => (
  <div> {props.text + " " +props.value} </div>
)
 

const Statistics = (props) => {
  console.log('Statistics', props)
  if (props.all === 0){
    return(
      <>
        <DisplayTitle text="Statistics" />
        <div>No feedback is given</div>
      </>
    )
  }
  return(
    <>
      <DisplayTitle text="Statistics" />
      <StatisticLine text="Good "  value={props.good} />
      <StatisticLine text="Neutral "  value={props.neutral} />
      <StatisticLine text="Bad "  value={props.bad} />
      <StatisticLine text="All "  value={props.all} />
      <StatisticLine text="Average "  value={props.average} />
      <StatisticLine text="Positive "  value={props.positive + " %"} />
    </>
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
      <Button 
        onClick1={Good_handleOnClick} text1="Good"
        onClick2={Neutral_handleOnClick} text2="Neutral"
        onClick3={Bad_handleOnClick} text3="Bad"
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
