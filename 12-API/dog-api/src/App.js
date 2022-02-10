import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
    const [user, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [alert, setAlert] = useState('')


    const onChange = e => {
        if (e.target.type === 'password') {
            setPassword(e.target.value)
        } else setUsername(e.target.value)
    }

    const login = (e) => {
        fetch(`https://reqres.in/api/login`,{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({
                email : user,
                password : password
            })
        })
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <div className="input">
            {/* <input type='text' placeholder="searching"></input>
            <input onChange={onChange}> */}
            {/* </input> */}
            {/* PreventDefault */}
            {/* add target value into an h1 drop down */}
            {/* <h1>{input}</h1> */}
            <div className='login'>
                <h1> Welcome Clowns! </h1>
                <input type='text' placeholder='User' onChange={onChange}></input>
                <input type='password' placeholder='Password' onChange={onChange}></input>
                <button onClick={login}> Sumbit </button>
            </div>
        </div>

    )
}