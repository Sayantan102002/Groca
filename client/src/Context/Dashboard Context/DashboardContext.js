import React from 'react'
import DashContext from './dashContext';

const getAddress = async (props) => {
    let host = "http://localhost:5000";
    const response = fetch(`${host}/api/Address/getAddress`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        }
    })
    const json = await response.json();
    console.log(json);
    return (
        <DashContext.Provider value={{ getAddress }}>
            {props.children}
        </DashContext.Provider>
    )
}

export default DashboardContext;
