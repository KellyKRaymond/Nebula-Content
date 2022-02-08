import './App.css'
import { useState } from 'react'

export default function App() {
    const [input, setInput] = useState('');
    const handleInputChange = e => {

    }

    return (
        <div className="input">
            <input type= 'text' placeholder="searching"></input>
            <input onChange={handleInputChange}>
            </input>
            {/* PreventDefault */}
            {/* add target value into an h1 drop down */}
            <h1>{input}</h1>

            
        <div className="NineBox">
            <div className= "box"> </div>
        

        </div>






        </div>

    )
}