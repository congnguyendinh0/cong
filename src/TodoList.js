import React, { useState } from "react";
import "./App.css";

export default function Todolist(props) {
  // to
  const [todo, setTodo] = useState([
    { text: "hello" },
    { text: "skkrt" },
    { text: "ssdsds" },
  ]);
  //input
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");
    addtodo(input);
    setInput("");
  };

  const addtodo = (text) => {
    const todolistrefresh = [...todo, { text }];
    setTodo(todolistrefresh);
  };

  const handleDelete = (todos) => {
    const filterlist = todo.filter((todovalue) => todovalue !== todos);
    setTodo(filterlist);
  };

  return (
    <div>
      <h1>Todolist</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input
              name="text"
              placeholder="todo"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      <div>
        <div>
          {todo.map((todo, index) => (
            <div key={index}>
              <p>{todo.text}</p>
              <button onClick={() => handleDelete(todo)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
