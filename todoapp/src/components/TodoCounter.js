import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ completedTodo, totalTodos }) {
  return (
    <>
      <h2 className="TodoCounter ">
        Has completado {completedTodo} de {totalTodos} TODOs
      </h2>
    </>
  );
}

export default TodoCounter;
