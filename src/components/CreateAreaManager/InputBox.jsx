import React from "react";
import { Input } from "@mui/material";

function InputBox(props) {
    const { handleFuncs, itemValue } = props
    return (
        <Input
            name="todoItem"
            margin="dense"
            placeholder="Todo Item..."
            color="success"
            sx={{ width: 200 }}
            onChange={handleFuncs.changeHandler}
            value={itemValue}
            onKeyDown={handleFuncs.keyPressHandler}
        />
    );
}

export default InputBox;