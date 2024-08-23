import ResetButton from "./ResetButton";
import PlusButton from "./Plusbutton";
import MinusButton from "./MinusButton";

const Counters = (props) => {
  return (
    <>
      {props.counters.map((value, index) => {
        return (
          <div className="buttons">
            <MinusButton
              value={value}
              newArr={props.newArr}
              setCounters={props.setCounters}
              index={index}
            />
            <p>{value}</p>
            <PlusButton
              value={value}
              newArr={props.newArr}
              setCounters={props.setCounters}
              index={index}
            />
            <ResetButton
              newArr={props.newArr}
              setCounters={props.setCounters}
              index={index}
            />
          </div>
        );
      })}
    </>
  );
};

export default Counters;
