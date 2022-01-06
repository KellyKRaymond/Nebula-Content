import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe/AboutMe.js';
import Hobbies from './components/Hobbies/Hobbies.js';
import Food from './components/Food/Food.js';

function App() {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [food, setFood] = useState("");

const [profile, setProfile] = useState()

  function handleNameChange(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }
  function handleHobbyChange(e){
    console.log(e.target.value)
    setHobby(e.target.value)
  }
  function handleFoodChange(e) {
    console.log(e.target.value)
    setFood(e.target.value)
  }
  return (
    <div> 
          <form>
            <label>Name
                <input
                type="text" 
                value={name}
                onChange={handleNameChange}
                />
            </label>
            </form>
            <form>
            <label>Favorite hobby
                <input
                type="text" 
                value={hobby}
                onChange={handleHobbyChange}
                />
            </label>
            </form>
            <form>
            <label>Favorite food
                <input
                type="text" 
                value={food}
                onChange={handleFoodChange}
                />
            </label>
            </form>
      <AboutMe fname = {name}/>
      <Hobbies hobby = {hobby}/>
      <Food food = {food}/>
    </div>
  )
}
export default App