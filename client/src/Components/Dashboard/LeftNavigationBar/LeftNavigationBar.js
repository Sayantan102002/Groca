import React, { useEffect, useContext } from 'react'
import './LeftNavigationBar.css';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Link, useLocation } from 'react-router-dom';
// import Contextinit from '../../../Context/contextinit';
const LeftNavigationBar = () => {
    // let Orders = document.getElementById('Menu-Orders');
    // let AccountSettings = document.getElementById('Menu-AccountSettings');
    // let FAQs = document.getElementById('Menu-FAQs');
    // let Logout = document.getElementById('Menu-Logout');
    // let context = useContext(Contextinit);
    // const { getUser, UserData } = context;
    const location = useLocation();
    
    useEffect(() => {
        // getUser();
        // UserData.map((data, index) => {
        //     return console.log(data)
        // })

        // console.log(UserData)
        console.log(location.pathname);
        if (location.pathname === '/Dashboard/Orders') {
            document.getElementById('Menu-Orders').style.borderLeftWidth = "5px";
            document.getElementById('Menu-Orders').style.borderLeftStyle = "solid";
            document.getElementById('Menu-Orders').style.borderLeftColor = "rgb(233, 30, 99)";
            // document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-AccountSettings').style.borderLeftStyle="solid" ;
            // document.getElementById('Menu-AccountSettings').style.borderLeftColor="transparent";
            // document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-FAQs').style.borderLeftStyle="solid" ;
            // document.getElementById('Menu-FAQs').style.borderLeftColor="transparent";
        }
        else if (location.pathname === '/Dashboard/AccountSettings') {
            document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px";
            document.getElementById('Menu-AccountSettings').style.borderLeftStyle = "solid";
            document.getElementById('Menu-AccountSettings').style.borderLeftColor = "rgb(233, 30, 99)";
            // document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-FAQs').style.borderLeftStyle="solid" ;
            // document.getElementById('Menu-FAQs').style.borderLeftColor="transparent";
            // document.getElementById('Menu-Orders').style.borderLeftColor="transparent";
            // document.getElementById('Menu-Orders').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-Orders').style.borderLeftStyle="solid" ;
        }
        else if (location.pathname === '/Dashboard/FAQs') {
            document.getElementById('Menu-FAQs').style.borderLeftWidth = "5px";
            document.getElementById('Menu-FAQs').style.borderLeftStyle = "solid";
            document.getElementById('Menu-FAQs').style.borderLeftColor = "rgb(233, 30, 99)";
            document.getElementById('Menu-FAQs').style.color = "rgb(233, 30, 99)";

            // document.getElementById('Menu-AccountSettings').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-AccountSettings').style.borderLeftStyle="solid" ;
            // document.getElementById('Menu-AccountSettings').style.borderLeftColor="transparent";
            // document.getElementById('Menu-Orders').style.borderLeftWidth = "5px" ;
            // document.getElementById('Menu-Orders').style.borderLeftStyle="solid" ;
            // document.getElementById('Menu-Orders').style.borderLeftColor="transparent";
        }
    });
    return (

        <div className="LeftNavBarForDashboard">
            
            <div className="ProfileContainer">
                <div className="ProfilePhoto">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
                <div className="GreetingsAndName">
                    <p>Hello,</p>
                    <p>{localStorage.getItem('firstname')}&nbsp;{localStorage.getItem('lastname')}</p>
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

                    <li className="Menu-Logout" id="Menu-Logout">
                        <PowerSettingsNewOutlinedIcon color="warning" /><p>Logout</p>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default LeftNavigationBar
