import React from "react";
import Item from "./Item";

function ItemsList(props) {
    const mappingList =
        props.items.map((value, index) => {
            return (
                <Item
                    deleteItem={props.onDelete}
                    key={index}
                    id={index}
                    itemValue={value}
                />
            );
        });

    return (
        <div className="items-list">
            {mappingList}
        </div>
    );
}

export default ItemsList;