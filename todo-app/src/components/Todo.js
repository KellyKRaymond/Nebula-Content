import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit} from 'react-icons/ti';

<div>
    <RiCloseCircleLine
    onClick={() => removeTodo(todo.id)}
    className="delete-icon"
    />
    <TiEdit
    onClick={() => setEdit({id: todo.id, value:todo.text})}
    className="edit-icon"
    />
</div>





export default function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    return TodoList.map((todo, idx) =>{
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={idx}>
          <div key={todo.id} onClick={() => completeToDo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
         <RiCloseCircleLine />
         <TiEdit/>
      </div>    
    </div>
    })
}
