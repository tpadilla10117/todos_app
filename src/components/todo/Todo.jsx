import React from 'react';

function Todo( {text, todo, todos, setTodos}) {

/* Delete and Completed functions: */
    const deleteHandler = () => {
        setTodos(
            todos.filter( (element) => element.id !== todo.id)
        )
    };

    const completeHandler = () => {
        setTodos(todos.map( (item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item;
        }))
    };

    return (
        <div className='todo-parent-container'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {text}
            </li>

            <button 
                className='todo-item-complete'
                onClick={completeHandler}
            >
            +
            </button>
            <button 
                className='todo-item-delete'
                onClick={deleteHandler}
            >
            -
            </button>
        </div>

    );
};

export default Todo;
/* https://www.youtube.com/watch?v=pCA4qpQDZD8&t=1025s */