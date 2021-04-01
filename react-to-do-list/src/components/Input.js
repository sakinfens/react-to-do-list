import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function Input ({addTodo}){
    const [todo, setTodo] = useState(
        {id: "",
        task: "",
        completed: false}
    ); 
const index = 0;


function handleTaskInputChange(e){
    //...todo is the old todo value and the the task is updated with the new todos target value

    setTodo({...todo, task: e.target.value})
}
    //when the user submits we want the form to add from the the state to the list of todos

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id: uuidv4() });
            //rest task property
            setTodo({...todo, task: ""})
        }
        console.log(todo.id)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input
                value={todo.task}
                //this will set the value of the todo
                onChange={handleTaskInputChange} 
                //onChange={handleTaskInputChange} ---- on change will fire everytime the input value changes
                type="text" name="task" placeholder="task" />
            </label>
        <input type="submit" value="Submit" />
        </form>
    )
}

export default Input;