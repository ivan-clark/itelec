import Label from "./Label";
const Panel = (props) => {

    return (
        <div>
            <Label number={props.number} setText={props.setText}/>
        </div>
    );
  }
  
  export default Panel;
  