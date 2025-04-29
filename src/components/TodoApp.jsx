import { useState } from 'react';
import './TodoApp.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoListeItem';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodoItemTodoListe(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function removeTodo(todoIndex) {
    const updatedTodos = todos.filter((element, index) => index !== todoIndex);
    setTodos(updatedTodos);
  }

  function handleChangeCheckBox(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  }

  return (
    <div className="todo">
      <TodoHeader addTodoItemTodoListe={addTodoItemTodoListe} />

      <div className="todo-liste">
        {todos.length === 0 && (
          <h2 className="todo-liste__text">Keine Todos</h2>
        )}

        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            removeTodo={() => removeTodo(index)}
            handleChangeCheckBox={() => handleChangeCheckBox(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
