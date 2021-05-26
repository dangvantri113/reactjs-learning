import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const submitHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleRemoveTodo = (index) => {
    todos.splice(index,1);
    setTodos([...todos]);
};
  return (
    <div className="App">
      <AddTodo  onSubmit={submitHandler}/>
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}

export default App;
