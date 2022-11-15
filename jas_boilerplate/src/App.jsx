import { useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskCard from "./AddTaskCard";
import "./App.css";
import ListItemCard from "./ListItemCard";
import { useSelector, useDispatch } from "react-redux";
import { FILTER } from "./todoReducer";

function App() {
  const types = ["open", "complete"];
  const [active, setActive] = useState(types[0]);
  const allTodos = useSelector((state) => state.todo.allTodos);
  const filteredTodos = useSelector((state) => state.todo.filteredTodos);
  const dispatch = useDispatch();

  const Tab = styled.button`
    padding: 10px 30px;
    cursor: pointer;
    border: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
  `;
  const tabPanel = () => {
    return (
      <>
        <div>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => {
                setActive(type);
                dispatch(FILTER(active));
              }}
            >
              {type}
            </Tab>
          ))}
        </div>
        <div className="cardOutline">
          <p> Task status: {active} </p>
          <ListItemCard cardData={filteredTodos} />
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <div>{tabPanel()}</div>
      <AddTaskCard></AddTaskCard>
    </div>
  );
}

export default App;
