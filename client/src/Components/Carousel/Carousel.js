import React, { useState, useEffect } from 'react';
import './Carousel.css';
import prevbtn from '../../assets/back-button.png'
import nextbtn from '../../assets/next-button.png'
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';

// const mouseIn = () => {
//     let in=document.getElementById('carousel-container')
//     in.style.transition="opacity 0.5s ease-in-out";
// }



function Carousel() {
    // let slide1=document.getElementById('slide1');
    // let slide2=document.getElementById('slide2');
    // let slide3=document.getElementById('slide3');
    // let slide4=document.getElementById('slide4');
    // let slide5=document.getElementById('slide5');
    let slideNum = 1;
    // let c = document.getElementById('carousel-slide');
    const [slide, setslide] = useState(slideNum);
    // useEffect(() => {
    //     setTimeout(() => {
    //         slideNum += 1;
    //         setslide(slideNum);
    //         c.style.backgroundImage = `url('../../assets/slide${slide}.jpg')`;
    //     }, 500);

    // }, [c, slideNum]);

    const prevSlide = () => {
        let prev = document.getElementsByClassName('carousel-slide')[0];
        // prev.style.opacity = 0;
        // prev.style.transition = "opacity 0.5s ease-in-out";
        slideNum -= 1;
        setslide(slideNum);
        prev.style.background = `url('../../assets/slide${slideNum}.jpg')`;
        console.log(slideNum);




        // prev.style.transform = "translateX(-100%)";
    }
    const nextSlide = () => {
        let next = document.getElementsByClassName('carousel-slide')[0];
        // next.style.transition = "opacity 0.5s ease-in-out";
        // next.style.transform = "translateX(100%)";
        slideNum += 1;
        setslide(slideNum);
        next.style.background= `url('../../assets/slide${slideNum}.jpg')`;
        console.log(slideNum);
    }

    return (
        <>
            <div id="carousel-container" className="carousel-container">
                <img onClick={prevSlide} className="prevbtn" src={prevbtn} alt="" />
                <div id="carousel-slide" className="carousel-slide">
                    {/* <img id="slide1" src={slide1} alt=""></img>
                    <img id="slide2" src={slide2} alt=""></img>
                    <img id="slide3" src={slide3} alt=""></img>
                    <img id="slide4" src={slide4} alt=""></img>
                    <img id="slide5" src={slide5} alt=""></img> */}
                </div>
                <img onClick={nextSlide} className="nextbtn" src={nextbtn} alt="" />
            </div>
        </>
    );
}

export default Carousel
