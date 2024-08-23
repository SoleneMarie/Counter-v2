import { useState } from "react";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([0]);
  const newArr = [...counters];
  console.log(counters.length);
  console.log(counters);
  console.log(counters[0]);

  return (
    <>
      <h1>React Counter v2</h1>
      <button
        onClick={() => {
          if (counters.length < 3) {
            setCounters([...counters, 0]);
          }
        }}
      >
        Add counter
      </button>

      {/*Je parcours le tableau counters grâce à la méthode map.
 Pour chaque case, je récupère la valeur à l'intérieur pour l'afficher.
 Cette valeur se mettra à jour lors des clicks*/}
      {counters.map((x) => {
        return (
          <div className="button">
            <button
              onClick={() => {
                newArr[0] -= 1;
                setCounters(newArr);
              }}
            >
              {console.log(x)}-
            </button>
            <p>{x}</p>
            <button
              onClick={() => {
                newArr[0] += 1;
                setCounters(newArr);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
