import { Link, useRouteError } from "react-router-dom"
import './NotFound.css';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className='NF'>    
    <h2>OOPSSS!! Page not found!</h2>
      <h1>Go to the <Link to="">Home</Link>.</h1>

    </div>
  )
}