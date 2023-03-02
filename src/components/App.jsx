import React, { useState } from "react"
import Header from "./Header";
import CreateArea from "./CreateArea";
import ItemsList from "./ItemList";

function App() {
  const [itemsArray, setItemsArray] = useState([]);

  function addItem(newItem) {
    setItemsArray((prev) => {
      console.log([...prev, newItem]);
      return [...prev, newItem];
    });
  }

  function deleteItem(id) {
    setItemsArray((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      <ItemsList items={itemsArray} onDelete={deleteItem} />
    </div>
  );
}

export default App;