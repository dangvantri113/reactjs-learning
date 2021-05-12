// import { useState } from "react";

function TodoList({ todos }) {
    // const [todos, setTodos] = useState(props.todos);

    return (
        <ul className="todo-list">
            { todos.map(
                (todo, index) => <li key={index}>{todo}</li>
            )}
        </ul>
    );
}

export default TodoList;