import React, {useState} from 'react';
import TodoForm from './TodoForm'

export default function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos)
    console.log('NewTodo:',todo, `\n`, ...todos, ...todos)

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.od !== id);
        setTodos(removeArr);
    }
    <todo todos ={todos} completeToDo={completeToDo} removeTodo={removeTodo}/>


}
    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete =!todo.isComplete
            }  
            return todo
        })
    }
    return(
        <div>
            <h1> What needs to be done today?</h1>
            <TodoForm onSumbit ={addTodo}/>
            <todo todos ={todos} completeToDo={completeToDo}/>
        </div>
    )
}
//export default function Todo({todos, completeTodo,removeTodo})