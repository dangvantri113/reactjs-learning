import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
function TodoList({ todos, handleRemoveTodo}) {
    

    return (
        <ul className="todoList">
            { todos.map(
                (todo, index) => <TodoItem key={index} todo={todo} handleRemoveTodo={()=>handleRemoveTodo(index)}/>
            )}
        </ul>
    );
}

export default TodoList;