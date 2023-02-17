import ReactDOM from "react-dom/client"
import React, { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"))

// function component 1
function Mycompo (prop){

    let compo = 
                <div>
                    <h1>
                        Hello {prop.name}
                    </h1>
                </div>

    return compo 
}

// function component 2
function Counter() {
    const [count, setCount] = useState(0);
  
    function incrementCount() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h2>Counter</h2>
        <p>Current count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
}

// function component 3
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    function addTodo() {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  
    function handleInputChange(event) {
      setNewTodo(event.target.value);
    }
  
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    );
}


// root.render(<Mycompo name="Gaurav"/>)
root.render(<Mycompo name="gaurav" />)