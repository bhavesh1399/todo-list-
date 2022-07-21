import React from "react";
import { v4 as uuidv4 } from "uuid";

function AddTasks({ input, setInput, todos, setTodos }) {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="green container">
        <h1>Create Task</h1>
        <input
          type="text"
          className="input"
          placeholder="Add new Task... "
          value={input}
          onChange={(e) => inputChange(e)}
        />

        <button className="add-button">Add Task</button>
      </div>
    </form>
  );
}

export default AddTasks;
