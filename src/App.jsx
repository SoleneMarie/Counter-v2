import { useState } from "react";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([0]);
  console.log(counters.length);
  console.log(counters);
  return (
    <>
      <h1>React Counter v2</h1>
      <button
        onClick={() => {
          setCounters([...counters, 0]);
        }}
      >
        Add counter
      </button>
      {counters > 0 && counters <= 3 && (
        <button
          onClick={() => {
            setCounters([...counters, 0]);
          }}
        >
          Add counter
        </button>
      )}
    </>
  );
}

export default App;
