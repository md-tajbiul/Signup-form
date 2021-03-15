import React, { useState } from 'react';
import './SignIn.css'
import image from '../images/pexels-markus-spiske-1089438.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [user, setUser] = useState({
        
        name : '',
        email : '',
        photo : '',
        password : ''
    })

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        let isValidForm = true;
        if (e.target.name === 'email') {
            isValidForm = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isValidPassword = e.target.value.length > 6;
            const isNumberPassword = /\d{1}/.test(e.target.value)
            isValidForm = isValidPassword && isNumberPassword;
        }
        if (isValidForm) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    const handleSubmit = () => {

    }
    return (
        <div className='section'>
            <div className="imgBox">
                <img src={image} alt=""/>
            </div>
            <div className="contentBox">
                <div className="formBox">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="inputBox">
                        <span> <FontAwesomeIcon icon={faEnvelope}/> Email Address</span>
                        <input type="text" name="email" onBlur={handleChange} required/>
                    </div>
                    <div className="inputBox">
                        <span> <FontAwesomeIcon icon={faKey}/> Password</span>
                        <input type="password" id='password' onBlur={handleChange} required name="password"/>
                    </div>
                    <div className="inputBox">
                        <Link id="idSignIn" to="/dashboard">Sign In</Link>
                    </div>
                    <div className="inputBox">
                        <p>Don't have a account?</p>
                        <Link to="/create-new-account">Sign Up <FontAwesomeIcon icon={faSignInAlt} rotation={270}/></Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;