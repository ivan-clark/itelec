const Label = (props) => {
    return (
        <>
            <label>{props.number}</label>
            <input type='text' onChange={(e)=>props.setText(e.target.value)} />
        </>
    );
  }
  
  export default Label;
  