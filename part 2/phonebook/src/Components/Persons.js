import React from "react";

const Person = (props) => (
    props.array.map(person => <div key={person.name}>{person.name + ' ' + person.number}</div>) //Important
)

export default Person