import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.text}
            <button onClick={() => toggleTodo(index)}>
                {todo.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    );
};

export default TodoItem;