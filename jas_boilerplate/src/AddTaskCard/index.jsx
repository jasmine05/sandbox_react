import { useState } from "react";
import ListItemCard from "../ListItemCard";
import { useSelector, useDispatch } from "react-redux";
import { ADD, REMOVE } from "../todoReducer";

function AddTaskCard() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  // const allTodos = useSelector((state) => state.todoReducer.allTodos);
  const dispatch = useDispatch();

  const addNewItem = () => {
    setTodoList([...todoList, { title: newItem, status: "open" }]);
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
      <button onClick={() => dispatch(ADD())}> Test reducer ADD</button>
      <button onClick={() => dispatch(REMOVE())}> Test reducer REMOVE</button>
      {/* <ListItemCard cardData={allTodos} /> */}
      <ListItemCard cardData={todoList} />
    </div>
  );
}

export default AddTaskCard;
