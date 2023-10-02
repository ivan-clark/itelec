import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
          username: "user",
          password: "test"
        }];

    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password"
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
      navigate('/Home');
    }
      // navigate('/Home');
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
        <div className="form">
        <form onSubmit={handleSubmit} >
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="input-container">
                {/* {errors.name && <p style={{color: "red", fontSize:"13px"}}>{errors.name}</p>} */}
                {renderErrorMessage("uname")}
                <input type="text" placeholder="Enter Username" name="uname" required />
            
                {/* {errors.password && <p style={{color: "red", fontSize:"13px"}}>{errors.password}</p>} */}
                {renderErrorMessage("pass")}
                <input type="password" placeholder="Enter Password" name="pass" required />

                <button onClick={handleSubmit}>Login</button>
                
            </div>
        </form>
    </div>
    );

    return (
      <div className="app">
        {isSubmitted ? null: (
        <div className="login-form">
          <div className="title"></div>
          {renderForm}
        </div>
        )}
      </div>
    );

}

export default Login
