
import './def-button.css'
import { useNavigate } from "react-router-dom";

const DefButton = (props) => {
    const navigate = useNavigate()
    let label = props.label ?? '(No Label)'

    const onClick = () => {
        if(props.to)
            navigate(props.to)
    }
    
    return (
      <>
        <div className='main' onClick={onClick}>
            <img src={ props.icon } style={{ height: '16px' }}/>
            <span style={{ fontSize: '13px', color: 'var(--gray)', fontWeight: '600' }}>{ label }</span>
        </div>
      </>
    );
  }

export default DefButton;