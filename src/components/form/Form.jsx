import React, {useState} from 'react';

function Form( {setInputText, inputText, todos, setTodos} ) {

/* State to generate unique Ids on each todo: */
    const [todoId, setTodoId] = useState(0);

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: `${todoId}`
            }
        ]);
        setInputText('');
        setTodoId(todoId + 1);
    };

    return (
        <form className='todoform-parent-container'>
            <input
                type='text'
                className='todoform-input'
                id='todoform-input'
                placeholder='Enter some text'
                value={inputText}
                onChange={inputTextHandler}
            />
            <label htmlFor='todoform-input'/>

            <button
                type='submit'
                className='todoform-button'
                onClick={submitTodoHandler}
            >
                Submit
            </button>

            <div className='todoform-select-parent-container'>
                <select id='todoform-select' className='todoform-select'>
                    <option value='all'>
                        All
                    </option>
                    <option value='completed'>
                        Completed
                    </option>
                    <option value='uncompleted'>
                        Uncompleted
                    </option>

                </select>
                <label htmlFor='todoform-select'/>
            </div>


        </form>
    )
}

export default Form;