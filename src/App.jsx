import { useState } from "react";
import { FaStopwatch } from "react-icons/fa";
import "./App.css";
import AddCounters from "./components/AddCounters";
import Counters from "./components/counters";

function App() {
  const [counters, setCounters] = useState([0]);
  const newArr = [...counters];

  return (
    <>
      <FaStopwatch />
      <h1>React Counter v2</h1>
      <AddCounters
        length={counters.length}
        setCounters={setCounters}
        counters={counters}
      />

      <Counters counters={counters} newArr={newArr} setCounters={setCounters} />
    </>
  );
}

export default App;
