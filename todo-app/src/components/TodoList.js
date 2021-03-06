import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

export default function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos)
    // console.log('NewTodo:',todo, `\n`, 'OldTodos:', ...todos)
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete =!todo.isComplete;
            }  
            return todo;
        })
        setTodos(updatedTodos);
    }
    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    return(
        <div>
            <h1> What needs to be done today?</h1>
            <TodoForm onSumbit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}  /> 
        </div>
    )
}
//export default function Todo({todos, completeTodo,removeTodo})