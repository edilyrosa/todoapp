import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (saludo) => {
    alert(`Modal abierto soy ${saludo}`);
  };
  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton("Edily")}
      >
        +
      </button>
    </>
  );
}

export default CreateTodoButton;
