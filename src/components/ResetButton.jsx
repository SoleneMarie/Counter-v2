const ResetButton = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.newArr[props.index] = 0;
          props.setCounters(props.newArr);
        }}
      >
        Reset
      </button>
    </>
  );
};
export default ResetButton;
