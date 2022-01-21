import React, { useState,useContext } from 'react'
import "./signup.css";
import logo from '../../assets/logo.png';
import signup from '../../assets/signupwallpaper.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import contextinit from '../../Context/contextinit';
// import EastSharpIcon from '@mui/icons-material/EastSharp';
// import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
export default function SignUp() {

    const context = useContext(contextinit);
    const { getUser } = context;


    const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", cpassword: "", gender: "", date_of_birth: "", phone_number: "" });
    // const [section, setSection] = useState(1);
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password, cpassword, gender, date_of_birth, phone_number } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, email, password, cpassword, gender, date_of_birth, phone_number })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            getUser();
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

    // const previousSection = () => {
    //     if (section === 1) {
    //         setSection(1);
    //     }
    //     setSection(section - 1);
    // }
    // const nextSection = () => {
    //     setSection(section + 1);
    // }

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
                                <input type="number" className="othersInput" id="phone_number" name="phone_number" onChange={onChange} placeholder="Phone Number" />
                                <input id="email" name="email" className="othersInput" onChange={onChange} type="email" placeholder="Email" />
                                <input id="password" name="password" className="othersInput" onChange={onChange} type="password" placeholder="Password" />
                                <input id="cpassword" name="cpassword" className="othersInput" onChange={onChange} type="password" placeholder="Confirm Password" />
                                <div className="gender">
                                    <div className="male">
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" className="maleRadio" id="gender" name="gender" onChange={onChange}/>
                                    </div>
                                    <div className="female">
                                        <label htmlFor="female">Female</label>
                                        <input type="radio" className="femaleRadio" id="gender" name="gender" onChange={onChange}/>
                                    </div>
                                </div>
                                <div className="dateOfBirth">
                                    <label htmlFor="date_of_birth">DOB </label>&nbsp;
                                    <input type="date" name="date_of_birth" id="date_of_birth" onChange={onChange}/>
                                </div>
                            </div>

                            {/* {(section === 2 ? <div className="section2">
                                <div className="others2">
                                    <input name="Street" id="Street" className="othersInput Street" placeholder="Street" type="text"></input>
                                    <input name="Locality" id="Locality" className="othersInput Locality" placeholder="Locality" type="text"></input>
                                    <input name="Landmark" id="Landmark" className="othersInput Landmark" placeholder="Landmark" type="text"></input>
                                    <div className="countryAndState">
                                        <input name="State" id="State" className="othersInput State" placeholder="State" type="text"></input>
                                        <input name="Country" id="Country" className="othersInput Country" placeholder="Country" type="text"></input>
                                    </div>
                                </div>
                            </div> : null)} */}
                            {/* <h4>Password must be atleast 8 characters long</h4> */}
                            <button type="submit" className="signup-button">Sign Up</button>
                            {/* <div className="nextAndPrevious">
                                <div onClick={previousSection} className="previous" type="submit"><KeyboardBackspaceSharpIcon color="primary" fontSize="large"></KeyboardBackspaceSharpIcon>Previous</div>
                                <div onClick={nextSection} className="next" type="submit">Next<EastSharpIcon color="primary" fontSize="large" /></div>
                            </div> */}
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
