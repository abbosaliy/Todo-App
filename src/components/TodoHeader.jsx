import { useState } from 'react';
import './TodoHeader.css';

function TodoHeader({ addTodoItemTodoListe }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(changeValue) {
    setInputValue(changeValue.target.value);
  }

  function addHandleClick() {
    if (!inputValue) return;
    addTodoItemTodoListe({ content: inputValue, done: false });
    setInputValue('');
  }

  return (
    <div className="todo-header">
      <h2 className="todo-name">Todo App</h2>
      <div className="todo-form">
        <input
          tuype="text"
          value={inputValue}
          onChange={handleInputChange}
          className="todo__input"
          placeholder="Todo hinzufugen"
        />
        <button
          onClick={addHandleClick}
          className="todo__add-button"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoHeader;
