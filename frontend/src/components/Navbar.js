import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar(props) {


  return (
    <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to={props.home} className='navbar-logo' >
                   HOME<i className="fab fa-typo3"></i>
                </Link>
                <ul className='nav-menu'>
                  <li className='nav-item'>
                    <Link to={props.page1} className='nav-links'>
                     {props.pageName}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={props.page2} className='nav-links'>
                     {props.pageName2}
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar