import { useState } from 'react'

const Button = (props) => {
  console.log('Button',props.text,props.onClick)
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

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
  const [Nvotes, setNvotes] = useState(0)

  let s = Math.floor(Math.random() * 6);
  
  const generate = () =>{
    setSelected(s)
    console.log("anecdote no.",s)
  }
  
  const points = new Uint8Array(7)
  let copy = [...points]
  
  const vote = () => {
    copy[s] = copy[s]+1
    setNvotes(copy[s])
    console.log("anecdote no.",selected,"Vote no.", copy[s])
  }
  
  return (
    <div>
      <div> {anecdotes[selected]} </div>
      <div>has {Nvotes} votes</div>
      <Button onClick={vote} text="Vote" />
      <Button onClick={generate} text="Next anecdote" />
    </div>
  )
}

export default App