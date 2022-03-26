import React from 'react';
import Banner1 from '../../assets/FooterBanner_1067x120.png'
// import Banner2 from '../../assets/FooterBanner_350x50.png'
import './Footer.css';
// import logo from '../../assets/logo.png';
export default function Footer() {
    return (
        <div className="FooterContainer">
            <div className="FooterBanner">
                {/* {if(window.screen.width>300){ */}
                    <img src={Banner1} className="banner" />
                {/* }} */}
            
                
            </div>
            <div className="FooterSection">
                {/* <div className="FooterGrid">
                        <div className="grid1">
                            <li><img src={logo} alt="" /></li>
                            <li>Address</li>
                            <li></li>
                            <li></li>
                        </div>
                        <div className="grid2">
                            <li><img src={logo} alt="" /></li>
                            <li>Address</li>
                            <li></li>
                            <li></li>
                        </div>
                        <div className="grid3">
                            <li><img src={logo} alt="" /></li>
                            <li>Address</li>
                            <li></li>
                            <li></li>
                        </div>
                        <div className="grid4">
                            <li><img src={logo} alt="" /></li>
                            <li>Address</li>
                            <li></li>
                            <li></li>
                        </div>
                </div> */}
            </div>
        </div>
    );
}
