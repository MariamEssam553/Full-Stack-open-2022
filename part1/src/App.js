const Header = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}

const Content = (props) =>{
  return(
    <p> {props.nPart} {props.nEx}</p>
  )
}

const Total = (props) =>{
  return(
    <p> Number of exercises {props.num}  </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content nPart={part1} nEx={exercises1}  />
      <Content nPart={part2} nEx={exercises2} />
      <Content nPart={part3} nEx={exercises3} />
      <Total num={exercises1 + exercises2 + exercises3} />
    </ >
  )
}

export default App