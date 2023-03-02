import React, { useState } from "react";
import DeleteButton from "./DeleteButton"


function Item(props) {
    const { itemValue, deleteItem, id } = props;

    const [isMouseOver, setMouseOver] = useState(false);

    function mouseOverHandler(event) {
        setMouseOver(true);
    }

    function mouseOutHandler() {
        setMouseOver(false);
    }

    return (
        <div className="item" onMouseOver={mouseOverHandler} onMouseLeave={mouseOutHandler}>
            <div className="content">
                <p className="pc">{itemValue}</p>
            </div>
            {isMouseOver === true && <DeleteButton deleteFunc={deleteItem} id={id} />}
        </div>
    )
}

export default Item;