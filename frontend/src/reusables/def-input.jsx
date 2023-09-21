const DefInput = (props) => {
    let label = props.label ?? 'Hey'
    return (
      <>
        <div className="row">
            <label className="col-md-12">{ label }</label>
            <br />
            <input className="col-md-12" value={'Hello World!'}/>
        </div>
      </>
    );
  }

export default DefInput;