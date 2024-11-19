// src/components/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
