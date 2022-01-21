import React from 'react'
import './Orders.css'
import LeftNavigationBar from '../LeftNavigationBar/LeftNavigationBar';
const Orders = () => {
    return (
        <div className="parentDashboardContainer">
            <div className="DashboardContainer">
                <div className="leftNavigationbar">
                    <LeftNavigationBar/>
                </div>
                <div className="rightNavigationbar">
                    {/* <RightNavigationBar/> */}
                    This is order page of User={localStorage.getItem('firstname')}
                </div>
            </div>
        </div>
    )
}

export default Orders
