import React, { useState } from "react";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completedTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import './DisplayTodo.css'
const mapStateToProps = (state) => {
  return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (props) => dispatch(addTodos(props)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (props) => dispatch(updateTodos(props)),
    completedTodo: (id) => dispatch(completedTodos(id)),
  };
};
const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="li">
      <div className="todo-title">
        <button className="todo-title-btn" onClick={() => setSort("active")}>Active</button>
        <button className="todo-title-btn" onClick={() => setSort("completed")}>Completed</button>
        <button className="todo-title-btn" onClick={() => setSort("all")}>All</button>
      </div>
      <ul className="todo-lis">
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem 
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completedTodo={props.completedTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
