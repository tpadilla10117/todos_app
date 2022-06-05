import React from 'react';
import {
    Todo
} from '../utils';

function TodoList( {todos, setTodos} ) {    

    return (

        <section className='todolist-parent-container'>
            <ul className='todolist'>
                {todos.map( (todo, index) => (
                    <Todo 
                        text={todo.text}
                        completed={todo.completed}
                        key={index}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </section>

    )
}

export default TodoList;