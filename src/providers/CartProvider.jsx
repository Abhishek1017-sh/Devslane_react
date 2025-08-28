import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AlertContext, CartContext, UserContext } from '../Contexts';
import { getCartFromServer, getProductsByIds, saveCartToServer } from '../api';

function CartProvider({children}) {
    
    const {user}=useContext(UserContext);
    const isLoggedIn=!!user;

    console.log("CartProvider isLoggedIn:", isLoggedIn);

    const [cart, setCart] = useState([]);

    useEffect(() => {
    if (!isLoggedIn) {
        // Guest cart from localStorage
        const savedDataString = localStorage.getItem("my-cart") || "{}";
        const savedData = JSON.parse(savedDataString);

        if (Object.keys(savedData).length > 0) {
        getProductsByIds(Object.keys(savedData)).then((products) => {
            const savedCart = products.map((p) => ({
            product: p,
            quantity: savedData[p.id],
            }));
            setCart(savedCart);
            console.log("not login:", savedCart);
        });
        }
    } else {
        // Logged in cart from server
        localStorage.removeItem("my-cart");

        getCartFromServer().then((serverCart) => {
        if (serverCart && serverCart.data) {
            // server returns [{ productId, quantity }]
            getProductsByIds(serverCart.data.map(item => item.productId))
            .then(products => {
                const hydratedCart = serverCart.data.map(item => ({
                product: products.find(p => p.id === item.productId),
                quantity: item.quantity
                }));
                setCart(hydratedCart);
            });
        }
        });
    }
    }, [isLoggedIn]);

    
    function updateCart(newCart) {
        setCart(newCart);
        if(!isLoggedIn){
            const cartForStorage = {};
            newCart.forEach((item) => {
                cartForStorage[item.product.id] = item.quantity;
            });
            localStorage.setItem("my-cart", JSON.stringify(cartForStorage));
            console.log("not loginupdate:",cartForStorage);
        }
        else{
            //save on server
            console.log("loginupdate:",newCart);
            saveCartToServer(newCart);
            
        }
    }

    const handleAddToCart = useCallback(
        (product, count) => {
        const existingItem = cart.find((item) => item.product.id === product.id);

        let newCart;
        if (existingItem) {
            newCart = cart.map((item) =>
            item.product.id === product.id
                ? { ...item, quantity: item.quantity + count }
                : item
            );
        } else {
            newCart = [...cart, { product, quantity: count }];
        }
        updateCart(newCart);
        },
        [cart]
    );

    const cartCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);
    console.log("count",cartCount)

    return <CartContext.Provider value={{ cart, updateCart, cartCount , handleAddToCart }}>
            {children}
        </CartContext.Provider>
}
export default CartProvider;