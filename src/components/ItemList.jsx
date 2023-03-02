import React from "react";
import Item from "./Item"

function ItemsList(props) {
    return (
        <div className="items-list">
            {props.items.map((value, index) => {
                return <Item deleteItem={props.onDelete} key={index} id={index} itemValue={value} />
            })}
        </div>
    )
}

export default ItemsList