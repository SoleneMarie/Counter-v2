const PlusButton = (props) => {
  return (
    <>
      {props.value < 10 && (
        <button
          onClick={() => {
            props.newArr[props.index] += 1;
            props.setCounters(props.newArr);
          }}
        >
          +
        </button>
      )}
    </>
  );
};
export default PlusButton;
