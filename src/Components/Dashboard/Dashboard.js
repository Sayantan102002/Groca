import React, { useEffect } from 'react'
import './Dashboard.css';
export default function Dashboard() {
    const getUser = async () => {
        // e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
        });
        json = await response.json();
        console.log(json.firstname);
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div >
            This is Dashboard
        </div>
    )
}
