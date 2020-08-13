import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const style = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
    height: "70px",
    boxShadow: "0 0 2px rgba(0,0,0,0.5)",
  },
  span: {
    maxWidth: "90%",
  },

  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={style.li}>
      <span style={style.span} className={classes.join(" ")}>
        <label className="container-checkbox">
          {" "}
          <span>
            {index + 1} {todo.title}
          </span>
          <input
            type="checkbox"
            checked={todo.completed}
            style={style.input}
            onChange={() => onChange(todo.id)}
          />
          <span className="checkmark"></span>
        </label>
      </span>
      <button
        className="rm cl-btn-7"
        onClick={removeTodo.bind(null, todo.id)}
      ></button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
