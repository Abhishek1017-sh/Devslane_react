import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";

function CartList({ products, cart, updateCart }) {
    const [localCart, setLocalCart] = useState(cart || {});

    useEffect(() => {
        setLocalCart(cart);
    }, [cart]);

    function handleQuantityChange(productId, newValue) {
        const newLocalCart = { ...localCart, [productId]: parseInt(newValue) || 0 };
        setLocalCart(newLocalCart);
    }

    function handleUpdateCart() {
        updateCart(localCart);
    }

    function handleRemove(productId) {
        const newCart = { ...cart };
        delete newCart[productId];
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

            {products.map((p) => (
                <CartRow
                    key={p.id}
                    onQunatityChange={handleQuantityChange}
                    onRemove={handleRemove}
                    product={p}
                    quantity={localCart[p.id] || 0}
                />
            ))}

            <div className="flex justify-end p-4 border-t bg-gray-50">
                <Button onClick={handleUpdateCart}>Update Cart</Button>
            </div>
        </div>
    );
}

export default CartList;
