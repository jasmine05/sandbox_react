import { useState } from "react";
import ListItemCard from "../ListItemCard";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "../todoReducer";

function AddTaskCard() {
  const [newItem, setNewItem] = useState("");
  const allTodos = useSelector((state) => state.todo.allTodos);
  const dispatch = useDispatch();

  const addNewItem = () => {
    dispatch(ADD({ title: newItem, status: "open" }));
    setNewItem("");
  };

  return (
    <div className="cardOutline">
      <h2>ADD TASK CONTENT</h2>
      <input
        type="text"
        name="addItemInput"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addNewItem}> Add new task</button>
      <ListItemCard cardData={allTodos} />
    </div>
  );
}

export default AddTaskCard;
