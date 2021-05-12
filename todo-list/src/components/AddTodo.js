import { useState } from "react";

function AddTodo(props) {
    console.log(1);
    const [todo, setTodo] = useState('');
    const changeTodo = (event) => {
        setTodo(event.target.value);
    }
    const AddTodoHandler = (event) => {
        console.log('submit');
        event.preventDefault();
        props.onSubmit(todo);
    };
    return (
        <form onSubmit={AddTodoHandler}>
            <div className="form-group">
                <input onChange={changeTodo} type="text" value={todo} placeholder="Something need to do" />
            </div>
            <div className="form-group">
                <input type="submit" value="Add" />
            </div>
        </form>
    );
}

export default AddTodo;