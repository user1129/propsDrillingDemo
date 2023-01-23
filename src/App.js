import { useState } from "react";
import "./style.css";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const AddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: text + Math.random() * 1000,
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const remove = (todoId) => {
    const filtered = todos.filter((todo) => todo.id !== todoId);
    setTodos(filtered);
  };

  const toggle = (todoId) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== todoId){
        return todo
      }else{
        return {
          ...todo,
          completed : !todo.completed
        }
      }
    }))
  }
  return (
    <div className="App">
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => AddTodo()}>Add</button>
      </label>
      <TodoList todos = {todos} remove = {remove} toggle={toggle}/>
    </div>
  );
}

export default App;
