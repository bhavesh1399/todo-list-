import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function CompletedTasks({ todos, setTodos }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="yellow container">
        <h1>Completed Tasks</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.completed === true ? (
              <div className="todo-list">
                {todo.title}
                <span className="align-btn">
                  <AiOutlineDelete
                    className="task-btn"
                    onClick={(e) => handleDelete(todo)}
                  />
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default CompletedTasks;
