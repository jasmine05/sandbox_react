import { useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskCard from "./AddTaskCard";
import "./App.css";
import ListItemCard from "./ListItemCard";

function App() {
  const types = ["open", "complete"];
  const [active, setActive] = useState(types[0]);
  const [mockToDoData, setMockToDoData] = useState([]);

  useEffect(() => {
    console.log("active", active);
    setMockToDoData([
      { title: "Clean house", status: "open" },
      { title: "Wash dishes", status: "open" },
      { title: "Dentist appointment", status: "complete" },
      { title: "Gift shopping", status: "open" },
      { title: "Haufe workshop", status: "open" },
    ]);
  }, [active]);

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
          <ListItemCard
            cardData={mockToDoData.filter((data) => data.status === active)}
          />
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
