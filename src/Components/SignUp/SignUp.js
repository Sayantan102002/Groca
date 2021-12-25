import React from 'react'
import "./signup.css";
import logo from '../../assets/logo.png';
import signup from '../../assets/signupwallpaper.png';
import { Link } from 'react-router-dom';
export default function SignUp() {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="left">
                    <div className="icon">
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <div className="signup-form">
                        <form method="POST">
                            <p className="heading">Sign Up</p>
                            <div className="name">
                                <input className="nameInput" type="text" placeholder="First Name" />
                                <input className="nameInput" type="text" placeholder="Last Name" />
                            </div>
                            <div className="others">
                                <input className="othersInput" type="email" placeholder="Email" />
                                <input className="othersInput" type="password" placeholder="Password" />
                                <input className="othersInput" type="password" placeholder="Confirm Password" />
                            </div>
                            <h3>Password must be atleast 8 characters long</h3>
                            <button type="submit" className="signup-button">Sign Up</button>
                            <h4 className="redirect">Already a member?<Link to="/LogIn"> LogIn</Link></h4>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <img className="wallpaper" src={signup} alt="" />
                </div>
            </div>
        </div>
    )
}
