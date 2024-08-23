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
      {counters.length < 3 && (
        <button
          onClick={() => {
            if (counters.length < 3) {
              setCounters([...counters, 0]);
            }
          }}
        >
          Add counter
        </button>
      )}

      {/*Je parcours le tableau counters grâce à la méthode map.
 Pour chaque case, je récupère la valeur à l'intérieur pour l'afficher.
 Cette valeur se mettra à jour lors des clicks*/}
      {counters.map((value, index) => {
        return (
          <div className="button">
            {value > 0 && (
              <button
                onClick={() => {
                  newArr[index] = newArr[index] - 1;
                  setCounters(newArr);
                }}
              >
                -
              </button>
            )}

            <p>{value}</p>
            {value <= 10 && (
              <button
                onClick={() => {
                  newArr[index] += 1;
                  setCounters(newArr);
                }}
              >
                +
              </button>
            )}

            <button
              onClick={() => {
                newArr[index] = 0;
                setCounters(newArr);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
