import React, { useState, useContext, useEffect } from 'react';
import './Cards.css';
import { useNavigate, Link } from 'react-router-dom';
import ProductsContext from '../../Context/ProductsContext/contextproduct';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutline';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import loadingIcon from '../../assets/loading.svg';

const Cards = (props) => {
    let navigate = useNavigate();
    const [Visibility, setVisibility] = useState(props.Sale);
    const [cartcount, setcartcount] = useState(0);
    const [AddToCart, setAddToCart] = useState(false);
    let context = useContext(ProductsContext);
    // let cardcontent = document.getElementsByClassName("card-content")[0];
    let btn = document.getElementById(props.id);
    let loadingbtn = document.getElementsByClassName(props.id)[0];
    const { getProduct, addInCart, fetchCart, updateCartItemQuantity, getItemQuantity } = context;
    const btnClick = async () => {
        setAddToCart(true);
        // console.log(props.id);
        if (AddToCart) {
            // setcartcount(cartcount + 1);
            await getProduct(props.id);
            await addInCart(props.id);

            btn.style.display = "none";
            loadingbtn.style.display = "flex";
            // setTimeout(() => {
            //     navigate('/cart');
            // }, 1000);
            // btn.img.src = {loadingIcon};
            // let newCart = await CartProducts.concat(getProduct(props.id));
            // btn.style.backgroundColor = "red";
            setTimeout(() => {
                btn.style.display = "flex";
                loadingbtn.style.display = "none";
                btn.textContent = "Added To Cart"
                btn.style.backgroundColor = "red";
                btn.disabled = true;
            }, 2000)

            // btn.style.display = "none";
            // cardcontent.style.display = "flex";
            // let cartCounter=cardcontent.createElement("div");


        }
        if (!localStorage.getItem('token')) {
            navigate('/Login');
        }
    }


    // const removeItem = async () => {
    //     setcartcount(cartcount - 1)
    //     await updateCartItemQuantity(props.Title, cartcount);
    //     if (cartcount < 1) {
    //         setcartcount(0);
    //         cardcontent.style.display = "none";
    //         btn.style.display = "flex";
    //     }

    // }
    // const addItem = () => {
    //     setcartcount(cartcount + 1)
    //     updateCartItemQuantity(props.Title, cartcount);
    // }
    useEffect(() => {
        btnClick();
        // fetchCart();
        // getItemQuantity(props.Title);
        // if(getItemQuantity(props.Title)>0){
        //     setcartcount(getItemQuantity(props.Title));
        //     console.log(getItemQuantity(props.Title));
        // }
        // console.log(fetchCartProduct);
        // getProduct(props.id);
        // addInCart(props.id);
    }, [])
    return (
        <>
            <div className="Cards">
                <div className="sale" style={{ visibility: `${!Visibility ? 'hidden' : 'visible'}` }}>
                    <div className="sale-text">
                        <p>Sale</p>
                    </div>
                    <div className="sale-discount">
                        <p>Save</p>
                        <p>{props.SaleDiscount}</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className="Card_img">
                        <img src={props.Img} alt="Img" />
                    </div>
                    <div className="Card_Title">
                        <p>{props.Title}</p>
                    </div>
                    {/* <div className="weights">
                    <p>{props.Weight}</p>
                </div> */}
                    <div className="prices">
                        {props.Title !== "Eggs" ? <p>{`Rs. ${props.Price}/kg`}</p> : <p>{`Rs. ${props.Price}/piece`}</p>}
                    </div>

                    <button onClick={btnClick} id={props.id} className="Add-to-Cart">Add to Cart</button>
                    <button style={{ display: "none" }} className={`Add-to-Cart ${props.id}`}><img src={loadingIcon} />Processing..</button>
                    {/* <div className="CartCounter">
                        <RemoveCircleIcon color="primary" onClick={removeItem} />
                        <p>{cartcount}</p>
                        <AddCircleIcon color="primary" onClick={addItem} />
                    </div> */}

                    {/* <img src={loadingIcon} alt="" /> */}
                </div>
            </div >
        </>
    )
}

export default Cards
