import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";
import { WithCart } from "./WithProvider";

function CartList({cart, updateCart }) {

    const [quantityMap, setQuantityMap] = useState({});

    const cartToQuantityMap=cart.reduce(function(m,cartItem){
            return {...m,[cartItem.product.id]:cartItem.quantity};
    },{});
    
    useEffect(() => {
        setQuantityMap(cartToQuantityMap);
    }, [cart]);

    function handleQuantityChange(productId, newValue) {
        const newQuantityMap={...quantityMap,[productId]:newValue};
        setQuantityMap(newQuantityMap);
    }

    function handleUpdateCart() {
        const newCart = cart.map((item) => ({
            product: item.product,
            quantity: quantityMap[item.product.id] || item.quantity,
        }));
        updateCart(newCart);
    }

    function handleRemove(productId) {
        const newCart = cart.filter((item) => item.product.id !== productId);
        updateCart(newCart);
    }

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="hidden md:grid md:grid-cols-7 bg-gray-100 font-bold text-gray-700 py-3 px-4 text-sm border-b">
                <span></span>
                <span></span>
                <span className="col-span-2">Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
            </div>

            {cart.map((cartItem) => (
                <CartRow
                    key={cartItem.product.id}
                    onQunatityChange={handleQuantityChange}
                    onRemove={handleRemove}
                    product={cartItem.product}
                    quantity={quantityMap[cartItem.product.id]}
                />
            ))}

            <div className="flex justify-end p-4 border-t bg-gray-50">
                <Button onClick={handleUpdateCart}>Update Cart</Button>
            </div>
        </div>
    );
}

export default WithCart(CartList);
