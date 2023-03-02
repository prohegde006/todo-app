import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

function Item(props) {
    // useStates
    const { itemValue, deleteItem, id } = props;
    const [isMouseOver, setMouseOver] = useState(false);

    // Mouse Movements Handling Function
    const mouseHandlers = {
        mouseOverHandler: function (event) {
            setMouseOver(true);
        },
        mouseOutHandler: function () {
            setMouseOver(false);
        }
    }

    // Item Component Returned
    return (
        <div
            className="item"
            onMouseOver={mouseHandlers.mouseOverHandler}
            onMouseLeave={mouseHandlers.mouseOutHandler}
        >
            <div className="content">
                <p className="pc">{itemValue}</p>
            </div>
            {
                isMouseOver === true &&
                <DeleteButton
                    deleteFunc={deleteItem}
                    id={id}
                />
            }
        </div>
    );
}

export default Item;