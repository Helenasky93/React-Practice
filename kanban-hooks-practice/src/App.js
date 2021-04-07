// import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Column from './components/Column';
import CreateTodo from './components/CreateTodo';


function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("kanbanTodos") ?? "{}"));
  useEffect(() => {
    localStorage.setItem("kanbanTodos", JSON.stringify(todos));
  });
  
  function createTodo(name) {
    todos[name] = 0;
    setTodos({...todos});
  }
  function updateTodo(prevName,name, column) {
    delete todos[prevName];
    todos[name] = column;
    setTodos({...todos});
  }

  function deleteTodo(name) {
    delete todos[name];
    setTodos({...todos});
  }

  return (
    <div className="app">
      <CreateTodo createTodo={createTodo}/>
      <div className="columns">

      <Column name="Backlog" todos= {todos} number={0}  updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Column name="Todo" todos={todos} number={1} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Column name="Doing" todos={todos} number={2} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Column name="Done" todos={todos} number={3} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>

    </div>
  )
}

export default App;
