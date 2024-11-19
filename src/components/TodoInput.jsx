// src/components/TodoInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

      dispatch(addTodo(text));
      setText("");
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleAddTodo} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
