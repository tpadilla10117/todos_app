import React from 'react';

function Form() {
  return (
    <form className='todoform-parent-container'>
        <input
            type='text'
            className='todoform-input'
            id='todoform-input'
            placeholder='Enter some text'
        />
        <label htmlFor='todoform-input'/>

        <button
            type='submit'
            className='todoform-button'
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