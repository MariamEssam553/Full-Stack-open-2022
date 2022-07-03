/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.name}</h1>
  )
}


const Content = () =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
      <>
          <Part nPart={part1} nEx={exercises1} />
          <Part nPart={part2} nEx={exercises2} />
          <Part nPart={part3} nEx={exercises3} />
      </ >
  )
}

const Part = (props) => {
  console.log(props)
  return(
      <p>{props.nPart} {props.nEx}</p>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <p> Number of exercises {props.num}  </p>
  )
}


//  ------------------------------------exercise 1.2-----------------------------

// const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
// 
  // return (
    // <>
      {/* <Header name={course} /> */}
      {/* <Content /> */}
      // //  <Content nPart={part1} nEx={exercises1}  />
      // //  <Content nPart={part2} nEx={exercises2} />
      // //  <Content nPart={part3} nEx={exercises3} />
      {/* <Total num={exercises1 + exercises2 + exercises3} /> */}
   // </ >
 // )
//}


//    ------------------------------exercise 1.3---------------------------------

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p> {part1.name} {part1.exercises} </p>
      <p> {part2.name} {part2.exercises} </p>
      <p> {part3.name} {part3.exercises} </p>
      <p> Number of exercises {part1.exercises + part2.exercises + part3.exercises} </p>
    </div>
  )
}

export default App