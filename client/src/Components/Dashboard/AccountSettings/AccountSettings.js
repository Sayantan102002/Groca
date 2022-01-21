import React from 'react'
import './AccountSettings.css'
import LeftNavigationBar from '../LeftNavigationBar/LeftNavigationBar';
const AccountSettings = () => {
    return (
        <div className="parentDashboardContainer">
        <div className="DashboardContainer">
            <div className="leftNavigationbar">
                <LeftNavigationBar/>
            </div>
            <div className="rightNavigationbar">
                {/* <RightNavigationBar/> */}
                This is Account Settings of User={localStorage.getItem('firstname')}
            </div>
        </div>
    </div>
    )
}

export default AccountSettings
