import './TodoItem.css';

function TodoItem({todo, handleRemoveTodo}) {
    return (
        <li className="todoItem">
            <span className="todoItem__value">{todo}</span>
            <button className="todoItem__deleteButton" onClick={handleRemoveTodo}><i className="fas fa-trash"></i></button>
        </li>
    );
}
export default TodoItem;