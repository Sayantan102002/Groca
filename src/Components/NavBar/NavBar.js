import React,{useState} from 'react';//rfc
import './NavBar.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function NavBar() {
    // let message = `GROCA \n GROCERY MART`;
    const [up, setup] = useState(false);
    const dropdownClick = () => {
        if(up==false){
            setup(true);
        }
        else
            setup(false);
    }
    return (
        <>
            <nav>
                <div className="NavBar">
                    <div className="list">
                        <img src={logo} alt="" />
                        <li><a href="#">Home</a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Shop <i className={`fa fa-chevron-${up==true?'up':'down'}`}></i></a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Best Sellers <i className={`fa fa-chevron-${up==true?'up':'down'}`}></i></a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Deal of the day <i className={`fa fa-chevron-${up==true?'up':'down'}`}></i></a></li>
                        <li onClick={dropdownClick}><a onClick={dropdownClick} href="#">Pages <i className={`fa fa-chevron-${up==true?'up':'down'}`}></i></a></li>
                        <li><Link to="/contact">Contact Us </Link></li>
                    </div>
                    <div className="shopping">
                        <li><Link to="/wishlist"><i className="fa fa-heart-o"></i></Link></li>
                        <li><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
                        <li><Link to="/SignUp"><i className="fa fa-user"></i></Link></li>
                    </div>
                </div>
            </nav>
            {/* <div className="input">
                <div className="dropdown">
                    <div className="container2">
                        <div className="bars">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="p">
                            <p>All Departments</p>
                        </div>
                        <div className="down arrow">
                            <i className="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <div className="container3">
                        <div className="categories">
                            <p>All Categories</p>
                            <i className="fa fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="container4">
                        <input type="text" className="searchbar" placeholder="Search Here" />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div> */}
        </>
    )
}

