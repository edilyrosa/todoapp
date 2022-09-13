import React, { useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import "./index.css";

const useStorageTodos = (nameItem, TDDInicial) => {
  const localStorageItem = localStorage.getItem(nameItem);
  let parsedItem; //!Sera la VE q contiene la DATA del LS

  if (!localStorageItem) {
    //!Es 1era vez y no existe, creamos la var en LS
    localStorage.setItem(nameItem, JSON.stringify(TDDInicial));
    parsedItem = TDDInicial; //!El valor inicial sera su TDD, HAY Q DARLE UN VALOR dado este if.
  } else {
    //!Ya existen la var en el LS y los parseamos. Pero la info esta en STRING, parseamosla
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = useState(parsedItem); //!los asignamos

  //!Funcion q guarda de todos los LS
  const saveLSItem = (newItem) => {
    const stringfiedItem = JSON.stringify(newItem); //!hacemos STRING la data.
    localStorage.setItem(nameItem, stringfiedItem); //!Guardamos la data STRING en el LS
    setItem(newItem); //!Seteamos la VE en Objeto JS.
  };
  return [item, saveLSItem];
};

/*
const defaultTodos = [
  { text: "Cortar", completed: false },
  { text: "Bailar", completed: false },
  { text: "Practicar", completed: true },
  { text: "Cantar", completed: true },
];
*/ //?esto fue enviado al LS con la creacion de la var "TODOS_V1"

function App() {
  //const [user, saveUser] = useStorageTodos("NOMBRE_USER", "Fernando");
  const [todos, saveLSTodos] = useStorageTodos("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const completedTodo = todos.filter((el) => !!el.completed).length;
  const totalTodos = todos.length;

  let searchedTodo = [];
  if (searchValue.length === 0) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter((el) => {
      let seachText = searchValue.toLocaleLowerCase();
      let todoText = el.text.toLocaleLowerCase();
      return todoText.includes(seachText);
    });
  }

  const completeTodos = (text) => {
    const todosCompletados = todos.map((el) =>
      el.text === text ? { text, completed: true } : el
    );
    saveLSTodos(todosCompletados);
  };
  /*
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((el) => el.text === text); //?findIndex()
    let newTodos = [...todos]; //!pq deben ser SPREAD para q funcione??
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  */
  const deleteTodos = (text) => {
    const todoSinDelete = todos.filter((el) => el.text !== text);
    saveLSTodos(todoSinDelete);
  };
  /*
  const deleteTodos = (text) => {
    const indexTodoDelete = todos.findIndex((el) => el.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodoDelete, 1);
    setTodos(newTodos);
  };
*/
  return (
    <>
      <h1>App TODO</h1>

      <TodoCounter completedTodo={completedTodo} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map((el) => (
          <TodoItem
            key={el.text}
            text={el.text}
            completed={el.completed}
            onComplete={() => completeTodos(el.text)} //!INTERESANTE, pasar el argumento de una
            onDelete={() => deleteTodos(el.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

//npm set registry http://registry.npmjs.org/
//npm uninstall -g create-react-app
//!npx create-react-app my-app
//cd my-app
//npm start
