import React, { useState } from 'react';//rfc
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function NavBar() {
    // let message = `GROCA \n GROCERY MART`;
    let navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("firstname");
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        localStorage.removeItem('phone_number');
        localStorage.removeItem('gender');
        localStorage.removeItem('Date Of Birth');
        navigate("/LogIn");
    }
    const [up, setup] = useState(false);
    const dropdownClick = () => {
        if (up == false) {
            setup(true);
        }
        else
            setup(false);
    }
    return (
        <>
            <nav>
                <div className="NavBar">
                    <div className="list">
                        <img src={logo} alt="" />
                        <li><a href="#">Home</a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Shop <i className={`fa fa-chevron-${up == true ? 'up' : 'down'}`}></i></a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Best Sellers <i className={`fa fa-chevron-${up == true ? 'up' : 'down'}`}></i></a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Deal of the day <i className={`fa fa-chevron-${up == true ? 'up' : 'down'}`}></i></a></li>
                        {(localStorage.getItem('token'))&&<li><Link to="/Dashboard/AccountSettings">Dashboard</Link></li>}
                        <li><Link to="/contact">Contact Us </Link></li>
                    </div>
                    <div className="shopping">
                        <li><Link to="/wishlist"><i className="fa fa-heart-o"></i></Link></li>
                        {(!localStorage.getItem('token')) ? <li><Link to="/SignUp">
                            <i className="fa fa-user"></i></Link></li> : <li onClick={Logout}><i className="fa fa-sign-out"></i></li>}
                        <li><Link to="/Cart"><ShoppingCartOutlinedIcon/></Link></li>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

