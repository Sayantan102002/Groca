import React,{useState} from 'react'
import "./signup.css";
import logo from '../../assets/logo.png';
import signup from '../../assets/signupwallpaper.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [credentials, setCredentials] = useState({ firstname: "",lastname:"", email: "", password: "",cpassword:""});
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname,lastname, email, password,cpassword } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname,lastname, email, password, cpassword })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            // localStorage.setItem("firstname", json.name);
            history("/");
            alert("User Created Successfully");
        }
        else {
            alert(json.error);
        }
    }


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="left">
                    <div className="icon">
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <div className="signup-form">
                        <form onSubmit={handleSubmit}>
                            <p className="heading">Sign Up</p>
                            <div className="name">
                                <input id="firstname" name="firstname" className="nameInput" onChange={onChange} type="text" placeholder="First Name" />
                                <input id="lastname" name="lastname" className="nameInput" onChange={onChange} type="text" placeholder="Last Name" />
                            </div>
                            <div className="others">
                                <input id="email" name="email" className="othersInput" onChange={onChange} type="email" placeholder="Email" />
                                <input id="password" name="password" className="othersInput" onChange={onChange} type="password" placeholder="Password" />
                                <input id="cpassword" name="cpassword" className="othersInput" onChange={onChange} type="password" placeholder="Confirm Password" />
                            </div>
                            <h3>Password must be atleast 8 characters long</h3>
                            <button type="submit" className="signup-button">Sign Up</button>
                            <h4 className="redirect">Already a member? <Link to="/LogIn">LogIn</Link></h4>
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
