import React, {useState, useEffect} from "react";
import './App.css';
import List from './components/List';
import Input from './components/Input';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"
//used to store todos





function App() {

  const [todos, setTodos] = useState([]);

  
  //populates out todos when the app renders
  //this allows the items to stay on the page when we refresh
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  
  useEffect(()=>{
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])


  function addTodo(todo){
    setTodos([todo, ...todos])
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo=>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <Input addTodo={addTodo}/>
      <List 
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      
      />
      
    </div>
  );
}

export default App;



//props are unidirectional data, they only flow in one direction
//useEffect allows us to provide functionality that responds to certain data
