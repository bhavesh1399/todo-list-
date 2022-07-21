import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDoneAll, MdDoneOutline } from "react-icons/md";

function MyTasks({ todos, setTodos }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = ({ id }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="redContainer">
        <h1>My Tasks</h1>
        {todos.map((todo) => (
          <li className="todo-list" key={todo.id}>
            {todo.completed === false ? (
              <>
                {todo.title}

                <span className="align-btn">
                  <AiOutlineDelete
                    className="task-btn"
                    onClick={(e) => handleDelete(todo)}
                  />
                </span>
                <span className="align-btn incompleted">
                  <MdDoneOutline
                    className="task-btn"
                    onClick={(e) => handleCompleted(todo)}
                  />
                </span>
              </>
            ) : (
              <>
                {todo.title}
                <span className="align-btn completed">
                  <MdDoneAll
                    className="task-btn"
                    onClick={(e) => handleCompleted(todo)}
                  />
                </span>
              </>
            )}
          </li>
        ))}
      </div>
    </>
  );
}

export default MyTasks;
