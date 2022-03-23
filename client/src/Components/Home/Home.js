import React, { useContext, useState, useEffect } from 'react'
import './Home.css';
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import ProductsContext from '../../Context/ProductsContext/contextproduct';
// import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import Carousel from '../Carousel/Carousel';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import OfferPage from '../OfferPage/OfferPage';
import Footer from '../Footer/Footer';
import Newsletter from '../NewsLetter/Newsletter';
// import veggies from '../../assets/Veggies.png';
// import fruits from '../../assets/Fruits.png';
export default function Home() {
    // let navigate = useNavigate();
    let context = useContext(ProductsContext);
    const { product, getProducts } = context;


    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);


    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         navigate("/LogIn");
    //     }
    // }, []);
    useEffect(() => {
        setTimeout(() => {
            getProducts();
            setloading(true);

            setTimeout(() => {
                setcompleted(true);
            },500)

        },1200)
        // console.log(product)
    }, []);

    return (
        <>
            {!completed ? (
                <>
                    {!loading ? (
                        <div className="spinner">
                            <span><img src={logo} alt="" /></span>
                            <div className="half-spinner"></div>
                        </div>
                    ) : (
                        <div className="completed">&#x2713;</div>
                    )}
                </>
            ) : (
                <>
                    <Header />
                    <NavBar />
                    {/* <Carousel/> */}
                    <SearchBar />
                    <div className="slide1">
                        {/* <img src={slide1} alt="" /> */}
                        <button>Shop Now</button>
                    </div>
                    <div className="groca">
                        <div className="veg">
                            <button>Buy Now</button>
                        </div>
                        <div className="fruit">
                            <button>Buy Now</button>
                        </div>
                    </div>

                    <div className="Our_Products">
                        {product.map((product2, index) => {
                            return <Cards key={index} Sale={product2.sale} SaleDiscount={product2.saleDiscount} Weights={product2.weights} Price={product2.price} Title={product2.title} Img={product2.image} id={product2._id} />
                        })}
                    </div>
                    <div className="OfferPage">
                        <OfferPage/>
                    </div>
                    <div className="Newsletter">
                        <Newsletter/>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </>
            )}
        </>
    )
}
