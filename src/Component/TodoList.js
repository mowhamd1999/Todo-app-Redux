import React, { useState } from "react";
import { addTodos } from "../redux/reducer";
import { connect } from "react-redux";
import "./TodoList.css";
import DisplayTodos from "./DisplayTodos";
const mapStateToProps = (state) => {
  return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (props) => dispatch(addTodos(props)),
  };
};
const TodoList = (props) => {
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo === "") {
      alert("input is empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
      console.log(props);
    }
  };
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="todo">
      <h1 className="todo-header">Todo App</h1>
      <input
        type="text"
        className="todo-input"
        value={todo}
        onChange={(e) => todoHandler(e)}
        placeholder="todo"
      />
      <button onClick={() => add()} className="todo-button">
        +
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
