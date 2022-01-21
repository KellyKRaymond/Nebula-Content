import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css'
import Friends from './components/Friends/Friends';


function App() {
  const [data, setData] = useState({})

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

    useEffect(() => {
      const data = JSON.parse(json) 
      setData(data)
    },[])

    console.log(data)
    return (
      
      <div>
        {(data.friends || []).map(friends,i => {
          <Friends friend = {friends} key={i}/> 
          })}
      </div>
    )
    }
export default App;
