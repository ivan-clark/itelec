import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import validation from './Validation'

const Login = () => {

    const [values, setValues] = useState({
        name: '',
        password: ''
    })

    const [errors, setError] = useState({})

    function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setError(validation(values));
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && (values.name !== "" && values.password !== "")) {
            alert("Form Submitted");
        }
    } , [errors] )

    return(
    <div className='wrap'>
        <form onSubmit={handleSubmit} >
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
                <div className="container">
                    {errors.name && <p style={{color: "red", fontSize:"13px"}}>{errors.name}</p>}
                    <input type="text" placeholder="Enter Username" name="name" values={values.name} onChange={handleChange} />
                
                    {errors.password && <p style={{color: "red", fontSize:"13px"}}>{errors.password}</p>}
                    <input type="password" placeholder="Enter Password" name="password" values={values.password} onChange={handleChange}/>
                
                    <button className="button" type="submit">Login</button>
                </div>
        </form>
    </div>
    )
}

export default Login
