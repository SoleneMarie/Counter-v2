const AddCounters = (props) => {
  return (
    <>
      {props.length < 3 && (
        <button
          onClick={() => {
            if (props.length < 3) {
              props.setCounters([...props.counters, 0]);
            }
          }}
        >
          Add counter
        </button>
      )}
    </>
  );
};

export default AddCounters;
