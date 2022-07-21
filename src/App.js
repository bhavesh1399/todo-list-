import { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks";
import CompletedTasks from "./components/CompletedTasks";
import MyTasks from "./components/MyTasks";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="background">
      <MyTasks todos={todos} setTodos={setTodos} />
      <CompletedTasks todos={todos} setTodos={setTodos} />
      <AddTasks
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
