import React, { useEffect } from "react";
import "./todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = ({ todo, index, removeTodo }) => {
  const useRef = React.useRef(null);

  return (
    <div
      className="todo"
      onMouseOver={() => useRef.current.classList.add("highlight")}
      ref={useRef}
    >
      <span>{todo}</span>

      <div>
        <button className="btn btn-danger" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
