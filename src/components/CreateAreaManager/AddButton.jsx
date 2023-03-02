import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material"

function AddButton(props) {
    const { clickFunction } = props;
    return (
        <div className="fab">
            <Fab color="success" onClick={clickFunction}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default AddButton;