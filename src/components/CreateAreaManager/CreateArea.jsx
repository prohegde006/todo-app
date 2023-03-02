import React, { useState } from "react";
import AddButton from "./AddButton";
import InputBox from "./InputBox";

function TodoInput(props) {
  const { onAdd } = props
  const [item, setItem] = useState("");

  const handlerFunctions = {
    changeHandler: function (event) {
      const { value } = event.target;
      setItem(value);
    },
    clickHandler: function () {
      onAdd(item)
      setItem("");
    },
    keyPressHandler: function (event) {
      if (event.keyCode === 13) {
        handlerFunctions.clickHandler();
      }
    }
  }

  return (
    <form onSubmit={e => { e.preventDefault(); }} className="form">
      <InputBox handleFuncs={handlerFunctions} itemValue={item} />
      <AddButton clickFunction={handlerFunctions.clickHandler} />
    </form>
  );
}

export default TodoInput;