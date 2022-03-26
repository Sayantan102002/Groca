import React, { useState } from 'react'
import Contextinit from './contextinit'
// import Dashboard from '../Components/Dashboard/Dashboard';
const UserContext = (props) => {
    let host = "http://localhost:5000";

    let data=[];
    const [ UserData, setData ] = useState(data);



    const getUser = async () => {
        // e.preventDefault();
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        // localStorage.setItem('firstname', json.email);
        // localStorage.setItem('lastname', json.lastname);
        console.log(Object.values(json));
        setData(Object.values(json));
        // localStorage.setItem('email', json.email);
        // localStorage.setItem('phone_number', json.Phone_Number);
        // localStorage.setItem('gender', json.Gender);
        // localStorage.setItem('Date Of Birth', json.Date_Of_Birth);
    }
    const updateDetails = async (id, firstname, lastname, email, Phone_Number) => {
        const response = await fetch(`${host}/api/auth/updateDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({ firstname, lastname, email, Phone_Number })
        })
        const json = await response.json();
        console.log(json);
    }
    return (
        <Contextinit.Provider value={{ getUser, UserData,updateDetails }}>
            {props.children}
        </Contextinit.Provider>
    )
}

export default UserContext