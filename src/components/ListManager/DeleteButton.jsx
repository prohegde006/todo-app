import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton(props) {
    const { deleteFunc, id } = props;
    return (
        <div className="action">
            <p className="pa" onClick={() => { deleteFunc(id) }}>
                <DeleteIcon color="success" />
            </p>
        </div>
    )
}

export default DeleteButton;