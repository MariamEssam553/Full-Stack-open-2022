import React from "react";

const Person = (props) => (
    
    <div key={props.id}>
        {props.name + ' ' + props.number + '  '}
        {/* <button onClick={props.toggleDelete}>delete</button> */}
    </div>
)

export default Person