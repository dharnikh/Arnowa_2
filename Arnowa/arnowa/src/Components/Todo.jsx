import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";


export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
     {/* {todos.map((item)=>{
      <table>
        <tr>
          <th>Message</th>
          <th>Date</th>
        </tr>
        <tr>
         <TodoItem><td>{item.title}</td></TodoItem> 
        <TodoItem><td>{item.id}</td></TodoItem>
        </tr>
      </table>
     })} */}
     
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} title={item.title}  />
        ))}
      </ul>
    </div>
  );
}
