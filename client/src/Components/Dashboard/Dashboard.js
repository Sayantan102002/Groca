import React from 'react'
// import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import LeftNavigationBar from './LeftNavigationBar/LeftNavigationBar';
// import Header from '../Header/Header'
// import UserContext from '../../Context/UserContext';

export default function Dashboard() {   
    return (
        <div className="parentDashboardContainer">
            <div className="DashboardContainer">
                <div className="leftNavigationbar">
                    <LeftNavigationBar/>
                </div>
                <div className="rightNavigationbar">
                    {/* <RightNavigationBar/> */}
                </div>
            </div>
        </div>
    )
}
