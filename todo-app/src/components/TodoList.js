import React, {useState} from 'react';
import TodoForm from './TodoForm'

export default function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos)
        console.log('NewTodo:',todo, `\n`, ...todos, ...todos)
    }
    return(
        <div>
            <h1> What needs to be done today?</h1>
            <TodoForm onSubmit = {addTodo}/>
        </div>
    )
}