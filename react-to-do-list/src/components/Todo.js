import React from "react";

function Todo({todo, toggleComplete, removeTodo}){
    function handleCheckBoxClicked(){
        toggleComplete(todo.id);
    }

    function handleRemove() {
        removeTodo(todo.id)
    }
    return(
        <div>
            <input type="checkbox" onClick={handleCheckBoxClicked}/>
            <li>{todo.task}</li>
            <button onClick={handleRemove}>X</button>
        </div>
        
    )
}

export default Todo;