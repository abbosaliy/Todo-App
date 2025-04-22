import './TodoHeader.css'


function TodoHeader({ inputValue, setInputValue, handleClick }) {


    function handleInputChange(changeValue) {
        setInputValue(changeValue.target.value)


    }

    return (
        <div>
            <h2 className='todo-name'>Todo App</h2>
            <div className='todo-form'>
                <input
                    tuype="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className='todo__input'
                    placeholder='Todo hinzufugen'
                />
                <button onClick={handleClick} className='todo__add-button'>Add</button>
            </div>
        </div>
    );
}

export default TodoHeader;