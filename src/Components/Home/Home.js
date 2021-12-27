import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    let navigate = useNavigate();

    
    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         navigate("/LogIn");
    //     }
    // }, []);

    return (
        <div>
            <Header />
            <NavBar />
        </div>
    )
}
