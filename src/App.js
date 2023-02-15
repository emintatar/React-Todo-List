import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, title: "Alışveriş Yap", completed: true },
  { id: 2, title: "Fatura Öde", completed: true },
  { id: 3, title: "Ders Çalış", completed: false },
  { id: 4, title: "Kahvaltı Yap", completed: false },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [text, setText] = useState("");

  const toggleTodo = (e) => {
    const newList = list.map((item) => {
      if (item.title === e.target.innerText) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const addNewTodo = () => {
    setList([...list, { id: Date.now(), title: text, completed: false }]);
    setText("");
  };

  const clearCompleted = () => {
    const newList = list.filter((item) => !item.completed);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>React To Do List</h1>

      <div className="add-form">
        <input
          value={text}
          onChange={updateText}
          type="text"
          placeholder="Add a new item"
        />
        <button onClick={addNewTodo} className="add-button">
          Add
        </button>
      </div>

      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            onClick={toggleTodo}
            className={item.completed ? "done" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={clearCompleted} className="clear">
        Clear Completed
      </button>
    </div>
  );
}
