import React, { useEffect, useContext, useState } from 'react'
import './LeftNavigationBar.css';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Link, useLocation } from 'react-router-dom';
import Contextinit from '../../../Context/contextinit';
import { useNavigate } from 'react-router-dom';
const LeftNavigationBar = () => {
    // let Orders = document.getElementById('Menu-Orders');
    // let AccountSettings = document.getElementById('Menu-AccountSettings');
    // let FAQs = document.getElementById('Menu-FAQs');
    // let Logout = document.getElementById('Menu-Logout');
    let context = useContext(Contextinit);
    const { getUser, UserData } = context;
    const location = useLocation();
    // const [email, setemail] = useState(undefined)
    const [firstname, setfirstname] = useState(undefined)
    const [lastname, setlastname] = useState(undefined)
    let navigate = useNavigate();
    useEffect(() => {
        // getUser();

        // console.log(Object.keys(UserData));
        // console.log(UserData);
        // for(const items in UserData) {
        //     console.log(items);
        // }
        UserData.map((data, index) => {
            // let email = data.email;
            // setemail(data.email);
            setfirstname(data.firstname);
            setlastname(data.lastname);
            // let firstName = data.firstname;
            // let lastName = data.lastname;
            // console.log(data.email,index);
        })
        // console.log(location.pathname);
        if (location.pathname === '/Dashboard/Orders') {
            document.getElementById('Menu-Orders').style.borderLeftWidth = "5px";
            document.getElementById('Menu-Orders').style.borderLeftStyle = "solid";
            document.getElementById('Menu-Orders').style.borderLeftColor = "rgb(233, 30, 99)";
            document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-AccountSettings').style.borderLeftStyle="solid" ;
            document.getElementById('Menu-AccountSettings').style.borderLeftColor="transparent";
            document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-FAQs').style.borderLeftStyle="solid" ;
            document.getElementById('Menu-FAQs').style.borderLeftColor="transparent";
        }
        else if (location.pathname === '/Dashboard/AccountSettings') {
            document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px";
            document.getElementById('Menu-AccountSettings').style.borderLeftStyle = "solid";
            document.getElementById('Menu-AccountSettings').style.borderLeftColor = "rgb(233, 30, 99)";
            document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-FAQs').style.borderLeftStyle="solid" ;
            document.getElementById('Menu-FAQs').style.borderLeftColor="transparent";
            document.getElementById('Menu-Orders').style.borderLeftColor="transparent";
            document.getElementById('Menu-Orders').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-Orders').style.borderLeftStyle="solid" ;
        }
        else if (location.pathname === '/Dashboard/FAQs') {
            document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px";
            document.getElementById('Menu-FAQs').style.borderLeftStyle = "solid";
            document.getElementById('Menu-FAQs').style.borderLeftColor = "rgb(233, 30, 99)";
            document.getElementById('Menu-FAQs').style.color = "rgb(233, 30, 99)";

            document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-AccountSettings').style.borderLeftStyle="solid" ;
            document.getElementById('Menu-AccountSettings').style.borderLeftColor="transparent";
            document.getElementById('Menu-Orders').style.borderLeftWidth = "5px" ;
            document.getElementById('Menu-Orders').style.borderLeftStyle="solid" ;
            document.getElementById('Menu-Orders').style.borderLeftColor="transparent";
        }
        getUser();
    }, []);
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
    return (

        <div className="LeftNavBarForDashboard">
            <div className="back-to-home">
                <Link to="/"><button>Back to Home</button></Link>
            </div>
            <div className="ProfileContainer">
                <div className="ProfilePhoto">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
                <div className="GreetingsAndName">
                    <p>Hello,</p>
                    <p>{firstname} &nbsp;{lastname}</p>
                </div>
            </div>
            <nav className="DashboardNavBar">
                <ul>
                    <Link to="/Dashboard/Orders"><li className="Menu-Orders" id="Menu-Orders">
                        <FilterFramesOutlinedIcon color="warning" />
                        <p>Orders</p>
                    </li></Link>
                    <Link to="/Dashboard/AccountSettings"><li className="Menu-AccountSettings" id="Menu-AccountSettings">
                        <AccountBoxOutlinedIcon color="warning" /><p>Account Settings</p></li></Link>

                    <Link to="/Dashboard/FAQs"><li className="Menu-FAQs" id="Menu-FAQs">
                        <LiveHelpOutlinedIcon color="warning" /><p>FAQs</p></li></Link>

                    <li className="Menu-Logout" id="Menu-Logout" onClick={Logout}>
                        <PowerSettingsNewOutlinedIcon color="warning" /><p>Logout</p>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default LeftNavigationBar
