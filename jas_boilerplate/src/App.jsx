import { useState } from "react";
import styled from "styled-components";
import AddTaskCard from "./AddTaskCard";
import "./App.css";
// import "../node_modules/react-tabs/style/react-tabs.scss";
function App() {
  const [count, setCount] = useState(0);
  const types = ["open", "complete"];
  const [active, setActive] = useState(types[0]);

  const mockToDoData = [
    { title: "Clean house", status: "open" },
    { title: "Wash dishes", status: "open" },
    { title: "Dentist appointment", status: "complete" },
    { title: "Gift shopping", status: "open" },
    { title: "Haufe workshop", status: "open" },
  ];

  const TabStyled = styled.button`
    padding: 10px 30px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    ${({ active }) =>
      active &&
      `
  border-bottom: 2px solid black;
  opacity: 1;
`}
  `;
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
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </div>
        <div className="cardOutline">
          <p> Task status: {active} </p>
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
