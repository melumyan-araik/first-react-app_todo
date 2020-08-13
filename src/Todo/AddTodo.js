import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <div className="add-todo">
        <div className="brise-input">
          <input type="text" {...input.bind} name="text" required />
          <label>Что сегодня по плану?</label>
          <span className="line"></span>
        </div>
        <button className="brise-btn" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

AddTodo.propsTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
