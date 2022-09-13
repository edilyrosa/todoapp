import React from "react";
import "../styles/TodoItem.css";

function TodoItem({ onComplete, onDelete, text, completed }) {
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
          onClick={onComplete}
        >
          √
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          X
        </span>
      </li>
    </>
  );
}

export default TodoItem;
