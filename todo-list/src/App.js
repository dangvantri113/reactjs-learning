import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const submitHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div className="App">
      <AddTodo  onSubmit={submitHandler}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
