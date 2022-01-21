import React, { useState,useContext } from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import contextinit from '../../Context/contextinit';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const context = useContext(contextinit);
    const { getUser } = context;    
    
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            getUser();
            // localStorage.setItem("firstname", json.name);
            // toast.success('LoggedIn Successfully', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     });
            history("/");
            alert("LoggedIn Successfully");
        }
        else {
            alert(json.error);
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const clientId = "417500584357-16tveh8e30b5kus9r0b4pasvr8be3kja.apps.googleusercontent.com";
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        localStorage.setItem("token", res.accessToken);
        alert("LoggedIn Successfully");
        // console.clear();
        
        history("/");
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div className="login">
            {/* <div className="login-container"> */}
            <div className="login-wallpaper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <img src={logo} alt="" className="logo-Login" />
                    <p className="welcomeback">Welcome back to Groca</p>
                    <input name="email" onChange={onChange} className="LoginInput" type="email" placeholder="Email" value={credentials.email} />
                    <input name="password" onChange={onChange} className="LoginInput" type="password" placeholder="Password" value={credentials.password} />
                    <button type="submit" className="LoginButton">Login</button>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Log In with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        // isSignedIn={true}
                    />
                    <h4 className="redirect">Not a member? <Link to="/SignUp">SignUp</Link></h4>
                </form>

                {/* <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
            </div>
            {/* </div> */}
        </div>
    )
}
