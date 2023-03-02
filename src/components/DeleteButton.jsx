import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function DeleteButton(props) {
    const { deleteFunc, id } = props;
    return <div className="action">
        <p className="pa" onClick={() => { deleteFunc(id) }}>
            <DeleteIcon color="success" />
        </p>
    </div>
}

export default DeleteButton;