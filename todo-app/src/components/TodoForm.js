import React, {useState} from 'react';

export default function TodoForm(props){

    const [edit, setEdit] = useState({
        id:null,
        value:''
    })
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()* 1000000),
            text: input 
        })
        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value)
    }
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
          <input
          type = 'text'
          placeholder = 'Add a todo'
          value = {input}
          name = 'text'
          className='todo-input'
          onChange={handleChange}
          />
          <button className='todo-button'> Add todo</button>
        </form>
    )
}