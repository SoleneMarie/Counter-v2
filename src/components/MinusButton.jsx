const MinusButton = (props) => {
  return (
    <>
      {props.value > 0 && (
        <button
          onClick={() => {
            props.newArr[props.index] -= 1;
            props.setCounters(props.newArr);
          }}
        >
          -
        </button>
      )}
    </>
  );
};
export default MinusButton;
