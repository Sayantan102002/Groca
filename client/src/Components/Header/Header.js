import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="contents">
                        <i className="fa fa-phone"></i>
                        <p type="tel">(+91)7908 375 185 | <i className="fa fa-envelope"></i>  info@groca.com</p>
                    </div>
                    <div className="social_media">
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
