import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({isRefresh, setRefresh}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data todos
    if (isRefresh) {
      fetch("http://localhost:8000/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false)
          // ketika Rest API sukses, simpan data dari response ke dalam state lokal
          setTodos(data);
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);

  return (
    <div className="task-list">
        <ul id="todo-list">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} setRefresh={setRefresh} />
            ))}
        </ul>
    </div>
    
  );
};

export default TodoList;