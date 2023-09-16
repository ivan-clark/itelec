import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css'



function Navbar(props) {
  //change the state of the menu
  const [click, setClick] = useState(false);

//reverse the state of the above funstion
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={props.home} className="navbar-logo" onClick={closeMobileMenu}>
                    HOME<i className="fab fa-typo3"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to={props.home} className='nav-links' onClick={closeMobileMenu}>
                     {props.page}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={props.school} className='nav-links' onClick={closeMobileMenu}>
                      {props.page2}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={props.hospital} className='nav-links' onClick={closeMobileMenu}>
                      {props.page3}
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar