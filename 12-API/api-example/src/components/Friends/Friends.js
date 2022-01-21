import React from "react";

export default function friends(props) {
    
    const { name, city, state, career, employed, age, image } = props.friends

    return(
    <div id='friends'>
    <h1>Friends</h1>
    <h1>{name}</h1>
    <h1>{city}</h1>
    <h1>{state}</h1>
    <h1>{career}</h1>
    <h1>{employed}</h1>
    <h1>{age}</h1>
    <h1>{image}</h1>
  </div>
)
}