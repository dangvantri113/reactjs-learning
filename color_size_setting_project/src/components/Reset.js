function Reset(props) {
  const reset = () => {
  	props.onReset();
  }
  return (
    <button type="button" className="btn btn-primary" onClick={reset}>reset</button>
  );
}

export default Reset;
