import React from 'react';
import {
    Todo
} from '../utils';

function TodoList( {todos} ) {

  return (

    <section className='todolist-parent-container'>
        <ul className='todolist'>
            {todos.map( (todo, index) => (
                <Todo 
                    text={todo.text}
                    completed={todo.completed}
                    key={index}
                />
            ))}
        </ul>
    </section>

  )
}

export default TodoList;