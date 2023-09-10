const OperatorButton = (props) => {

  return (
      <button onClick={props.handleNum}>{props.text}</button>
  );
}

export default OperatorButton;
