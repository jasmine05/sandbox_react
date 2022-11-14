import { useEffect, useState } from "react";

function ListItemCard(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(props.cardData);
  }, [props.cardData]);

  return (
    <div className="cardOutline">
      <h2>LIST CARD</h2>
      <div>
        {todoList.map((todo) => (
          <div key={todo.title} style={{ display: "flex" }}>
            <input
              type="checkbox"
              id={todo.title}
              name={todo.title}
              value={todo.status}
              onChange={() => {}}
              checked={todo.status === "complete"}
            />
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItemCard;
