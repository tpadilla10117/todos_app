import React from 'react';

function Todo( {text, completed}) {
  return (
      <div className='todo-parent-container'>
          <li className='todo-item'>
            {text}
          </li>

          <button className='todo-item-complete'>
            +
          </button>
          <button className='todo-item-delete'>
            -
          </button>
      </div>
    
  );
};

export default Todo;