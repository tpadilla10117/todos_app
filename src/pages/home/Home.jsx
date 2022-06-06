import React, { useState, useEffect } from 'react';

import {
    Form,
    TodoList
} from '../../components/utils.js';

const HomePage = () => {

/* State for form inputs, todos, dropdown menu, and filtered todos:  */
    const [ inputText, setInputText ] = useState('');
    const [ todos, setTodos ] = useState([]);
    const [ status, setStatus ] = useState('all'); 
    const [ filteredTodoItems, setFilteredTodoItems ] = useState([]);


/* Functions for filtering Todos: */
    const filterHandler = () => {
        if(status === 'completed') {
            setFilteredTodoItems(todos.filter( todo => todo.completed === true ) );
        } else if (status === 'uncompleted') {
            setFilteredTodoItems(todos.filter( todo => todo.completed === false ) );
        } else {
            setFilteredTodoItems(todos);
        }
    };

    return (
        <main id="homepage-parent-container">
    
            <Form 
                setInputText={setInputText} 
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />

        </main>
    );
};

export default HomePage;