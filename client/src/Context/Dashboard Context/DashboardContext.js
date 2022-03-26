import React from 'react'
import DashContext from './dashContext';

const DashboardContext = (props) => {
    let host = "http://localhost:5000";
    const getAddress = async () => {
        const response = fetch(`${host}/api/Address/getAddress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            }
        })
        const json = await response.json();
        console.log(json);
    }
    // const updateDetails = async (id, firstname, lastname, email, Phone_Number) => {
    //     const response = await fetch(`${host}/api/auth/updateDetails/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('token'),
    //         },
    //         body: JSON.stringify({ firstname, lastname, email, Phone_Number })
    //     })
    //     const json = await response.json();
    //     console.log(json);
    // }
    return (
        <DashContext.Provider value={{ updateDetails }}>
            {props.children}
        </DashContext.Provider>
    )

}

export default DashboardContext;
