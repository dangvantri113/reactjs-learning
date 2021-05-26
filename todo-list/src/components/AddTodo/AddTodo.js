import { useState } from "react";
import './AddTodo.css';

function AddTodo(props) {
    const [todo, setTodo] = useState('');
    const changeTodo = (event) => {
        setTodo(event.target.value);
    }
    const AddTodoHandler = (event) => {
        event.preventDefault();
        if (todo !== '') {
            props.onSubmit(todo);
            setTodo('');
        }
    };
    return (
        <form className="addListForm" onSubmit={AddTodoHandler}>
            <div className="formGroupHasButton">
                <input className="formGroupHasButton__input" onChange={changeTodo} type="text" value={todo} placeholder="Something need to do" />
                <button className="formGroupHasButton__button" type="submit"><i className="fas fa-plus"></i></button>
            </div>
        </form>
    );
}

export default AddTodo;