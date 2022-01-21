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
        console.log(json);
        setData(json);
        // localStorage.setItem('firstname', json.firstname);
        // localStorage.setItem('lastname', json.lastname);
        // localStorage.setItem('email', json.email);
        // localStorage.setItem('phone_number', json.Phone_Number);
        // localStorage.setItem('gender', json.Gender);
        // localStorage.setItem('Date Of Birth', json.Date_Of_Birth);
    }

    return (
        <Contextinit.Provider value={{ getUser, UserData }}>
            {props.children}
        </Contextinit.Provider>
    )
}

export default UserContext
