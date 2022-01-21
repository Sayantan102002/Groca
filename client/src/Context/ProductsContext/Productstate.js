import React, { useState } from 'react'
import ProductsContext from './contextproduct';
const Productstate = (props) => {
    let products = [];
    const CartProducts = [];
    let fetchCartProduct = [];
    const [FetchCart, setFetchCart] = useState(fetchCartProduct);
    const [Cart, setCart] = useState(CartProducts);
    const [product, setproduct] = useState(products);
    let host = "http://localhost:5000";
    const getProducts = async () => {

        // e.preventDefault();
        
            const response = await fetch(`${host}/api/products/getproducts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            const json = await response.json();
            setproduct(json);
            
        
        // console.log(json);

    }

    const getProduct = async (id) => {
        const response = await fetch(`${host}/api/products/getproduct/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        let newCartProducts = Cart.concat(json);
        setCart(newCartProducts);
        // console.log(Cart);
    }


    const addInCart = async (id) => {
        const response = await fetch(`${host}/api/Cart/enterinCart/${id}`, {
            method: 'POST',
            headers: {
                'ContentType': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        console.log(json);
    }
    const fetchCart = async () => {
        const response = await fetch(`${host}/api/Cart/getCart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        let fetchcart = FetchCart.concat(json);
        setFetchCart(fetchcart);
        // console.table(fetchCartProduct);
        // console.table(json);
    }

    const updateCartItemQuantity =async (title, quantity) => {
            const response = await fetch(`${host}/api/Cart/updateCartItemQuantity/${title}/${quantity}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                    'Connection':'close'
                },
            });
            const json = await response.json();

    }
    const getItemQuantity =async (id) => {
            const response = await fetch(`${host}/api/Cart/getItemQuantity/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                    'Connection':'close'
                },
            });
            const json = await response.json();
            console.log(json);
    }


    return (
        <ProductsContext.Provider value={{ Cart, product, getProducts, getProduct, addInCart, fetchCart, FetchCart, updateCartItemQuantity, getItemQuantity}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default Productstate