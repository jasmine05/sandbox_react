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
        {todoList.map((todo, index) => (
          <div key={todo.title} style={{ display: "flex" }}>
            <input
              type="checkbox"
              id={index}
              name={todo.title}
              value={todo.status}
              onChange={(e) => {
                const newTodos = [...todoList];
                newTodos[index].status = e.target.checked ? "complete" : "open";
                setTodoList(newTodos);
              }}
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
