import { Outlet, Link } from "react-router-dom";
import DefInput from "../reusables/def-input";
import logo from "../assets/images/racelLogo.png"
import DefButton from "../reusables/def-button";
import home_icon from '../assets/icons/home.png'
import about_icon from '../assets/icons/info.png'

const Root = () => {
    return (
      <>
        <div className="row" style={{ display:'flex', flexFlow: 'row', minHeight: '100vh', margin: '0', backgroundColor: '#F8F9F9' }}>
          <div className="col" style={{ display: 'flex', flexFlow: 'column', padding: '20px 10px', backgroundColor:'#EAECEE', minWidth: '200px',  maxWidth: '20%', minHeight: '100%' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <div>
                  <img src={ logo } style={{ width: '40px', height: '40px' }}/>

                </div>
                <div className="col" style={{ display:'flex', flexFlow: 'column', justifyContent: 'center' }}>
                  <span style={{ fontFamily:'sans-serif', fontSize: '14px', fontWeight:'600' }}>Racel Anne Pitogo</span>
                  <span style={{ fontSize: '12px' }}>BSIT-4</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexFlow: 'column', flexGrow: '100', gap: '8px' }}>
                <DefButton label={'Home'} icon={home_icon} to={'/home'}/>

                <DefButton label={'About'} icon={about_icon} to={'/about'} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: '10px' }}>Sample Text @ 2023</span>
              </div>
{/* 
              <Link to={`/home`}>Home</Link>
              <Link to={`/about`}>About</Link> */}
          </div>
          <div style={{ flexGrow: '100' }}>
            {/* <div style={{ height: '50px' }}>
              Header
            </div> */}
            <Outlet/>

          </div>
        </div>

      </>
    );
  }

  export default Root;