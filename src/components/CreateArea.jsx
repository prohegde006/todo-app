import React, { useState } from "react";
import { Input, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Item from "./Item";

function TodoInput(props) {
  const { onAdd } = props
  const [item, setItem] = useState("");

  function changeHandler(event) {
    const { value } = event.target;
    setItem(value);
  }

  function clickHandler(event) {
    onAdd(item)
    setItem("");
  }

  function keyPressHandler(e){
    if(e.keyCode === 13){
      clickHandler();
    }
  }

  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); }} className="form">
        <Input
          name="todoItem"
          fullWidth={false}
          margin="dense"
          placeholder="Todo Item..."
          color="success"
          sx={{ width: 200 }}
          onChange={changeHandler}
          value={item}
          onKeyDown={keyPressHandler}
        />
        <div className="fab">
          <Fab color="success" onClick={clickHandler}>
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;