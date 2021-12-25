import React from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
export default function Login() {
    return (
        <div className="login">
            {/* <div className="login-container"> */}
                <div className="login-wallpaper">
                    <form className="login-form">
                        <img src={logo} alt="" className="logo-Login" />
                        <p className="welcomeback">Welcome back to Groca</p>
                        <input className="LoginInput" type="email" placeholder="Email" />
                        <input className="LoginInput" type="password" placeholder="Password" />
                        <button type="submit" className="LoginButton">Login</button>
                    </form>
                </div>
            {/* </div> */}
        </div>
    )
}
