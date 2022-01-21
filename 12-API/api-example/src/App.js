import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState({})

  export default function friends(props) {
    const { name, city, state, career, employed, age, image } = props.friends

  const json = `{
      "friends":[
          {
            "name": "Rachel Greene",
            "city": "NYC",
            "state": "New York", 
            "image": './rachel.jpg'
            "career": "fashion",
            "employed": "true"
            "age": 31
          }, 
          { 
            "name": "Ross Geller",
            "city": "NYC",
            "state": "New York", 
            "image": './ross.jpg'
            "career": "dinosaurs"
            "employed": "false"
            "age": 34
          },
          {
            "name": "Joey Tribbiani",
            "city": "NYC",
            "image": './joey.jpg'
            "state": "New York", 
            "career": "actor",
            "employed": "false"
            "age": 29
          },
          {
            "name": "Chandler Bing",
            "city": "Tulsa",
            "image": './chandler.jpg'
            "state": "Oklahoma", 
            "employed": "true"
            "position": "statistical analysis and data reconfiguration",
            "age": 32
          }
          "name": "Monica Geller",
          "city": "NYC",
          "image": './monica.png'
          "state": "New York", 
          "employed": "true"
          "position": "Chef",
          "age": 28
        }
        {
          "name": "Pheobe Buffay",
          "city": "NYC",
          "image": './pheebs.jpg'
          "state": "New York", 
          "employed": "false"
          "position": "masseuse",
          "age": 27
      ]
    }`

  // useEffect(() => {
  //   const data = JSON.parse(json);
  //   setData(data)
  // }, [])

  // const getData = async () => {

  // }

  //   return (
  //     <div className='App'>
  //       const data = JSON.parse(json);
  //       {data.employees?.map(person => <h1> {person.name}</h1>)}
  //     </div>
  //   )
  // }


    return (
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
}
export default App;
