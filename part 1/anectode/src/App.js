import { useState } from 'react'

const Button = (props) => {
  console.log('Button',props.text,props.onClick)
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const WriteTitle = ({text})=>(
  <h1>{text}</h1>
)


const AnecdoteChosen = (props) => (
  <div> {props.text} </div>
)
  

const NVotes = (props) =>(
  <div> has {props.n} votes </div>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] =  useState(Array(anecdotes.length).fill(0))
  const [max, setMax] = useState(0)

  let s = Math.floor(Math.random() * anecdotes.length)
  
  const generate = () => {
    while (s === selected){
      s = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(s)
    console.log("anecdote no.",s)
  }
  
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log("anecdote no.",selected,"Vote no.", copy[s])
    let maxVotes = votes.indexOf(Math.max(...votes))
    setMax(maxVotes)
  }
  
  return (
    <div>
      <WriteTitle text="Ancedote of the day" />
      <AnecdoteChosen text={anecdotes[selected]} />
      <NVotes n={votes[selected]} />
      {/* <div> {anecdotes[selected]} </div> */}
      {/* <div> has {votes[selected]} votes </div> */}
      <Button onClick={vote} text="Vote" />
      <Button onClick={generate} text="Next anecdote" />
      <WriteTitle text="Anecdotes with most votes" />
      <AnecdoteChosen text={anecdotes[max]} />
      <NVotes n={votes[max]} />
    </div>
  )
}

export default App