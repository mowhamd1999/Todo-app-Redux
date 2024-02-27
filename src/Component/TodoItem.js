import { useRef } from "react";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
function TodoItem(props) {
  const { item, updateTodo, removeTodo, completedTodo } = props;
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div>
      <li className="todo-li" key={item.id}>
        <textarea
          className="todo-textarea"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="todo-li-btn">
          <div>
            <div>
              {item.completed && <span className="todo-span">Completed</span>}
            </div>
            <div>
              {!item.completed && (
                <span className="todo-span">Uncompleted</span>
              )}
            </div>
          </div>
          <div className="todo-li-btn">
            <div>
              <button className="btn" onClick={() => changeFocus()}>
                <AiFillEdit className="todo-icon" />
              </button>
              {item.completed === false && (
                <button
                  className="btn"
                  style={{ color: "green" }}
                  onClick={() => completedTodo(item.id)}
                >
                  <MdDownloadDone className="todo-icon" />
                </button>
              )}
              <button
                className="btn"
                style={{ color: "red" }}
                onClick={() => removeTodo(item.id)}
              >
                <RiCloseCircleLine className="todo-icon" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
