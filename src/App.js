import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TodoItem from './components/TodoItem'; 
import Contact from './components/Contact'; 
function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue) return; 
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    const fetchData = async () => {
        try {
          const response = await fetch('https://api.example.com/data');
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          const data = await response.json();
          
        } catch (error) {
          console.error("Error fetching data:", error);
          
        }
      };

    return (
        <Router>
            <div className="App">
                <h1>To-Do List</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={
                        <>
                            <form onSubmit={addTodo}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => {
                                        console.log(e)
                                        //setInputValue(e.target.value)
                                    }}
                                    placeholder="Add a new task"
                                />
                                <button type="submit">Add</button>
                            </form>
                            <ul>
                                {todos.map((todo, index) => (
                                    <TodoItem
                                        key={index}
                                        todo={todo}
                                        index={index}
                                        toggleTodo={toggleTodo}
                                        removeTodo={removeTodo}
                                    />
                                ))}
                            </ul>
                        </>
                    } />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;