import { useState } from "react";
import ListItemCard from "../ListItemCard";

function AddTaskCard() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    setTodoList([...todoList, { title: newItem, status: "open" }]);
    setNewItem("");
  };

  return (
    <div className="cardOutline">
      <h2>ADD TASK CONTENT</h2>
      <input
        type="text"
        name="here"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addNewItem}> Add new task</button>
      <ListItemCard cardData={todoList} />
    </div>
  );
}

export default AddTaskCard;
