import React, { useState } from 'react';

import {
    Form,
    TodoList
} from '../../components/utils.js';

const HomePage = () => {

    const [ inputText, setInputText ] = useState('');
    const [ todos, setTodos ] = useState([]);

    return (
        <main id="homepage-parent-container">
    
            <Form 
                setInputText={setInputText} 
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />

        </main>
    );
};

export default HomePage;