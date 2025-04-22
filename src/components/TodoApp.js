
import { useState } from 'react';
import './TodoApp.css'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoListeItem';




function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    //fur todo speichern
    const [todos, setTodos] = useState([]);


    function handleClick() {

        if (!inputValue) return
        setTodos([...todos, inputValue]);
        //nach dem add musste inputfeld
        //  ler sein
        setInputValue("")
    }

    function handleDalete(todoIndex) {
        console.log(todoIndex);
        const filterTodo = todos.filter((element, index) => index !== todoIndex)
        setTodos(filterTodo)
    }


    return (
        <div className='todo'>
            <TodoHeader
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleClick={handleClick}
            />

            <div className='todo-liste'>
                {todos.length === 0 && <h2 className='todo-liste__text'>Keine Todos</h2>}
                {todos.map((todo, index) =>
                    <TodoItem
                        key={index}
                        text={todo}
                        //Array Fn 
                        onDelete={() => handleDalete(index)}
                    />)}
            </div>
        </div>
    );
}

export default TodoApp;