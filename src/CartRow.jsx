import React from "react";
import { ImCross } from "react-icons/im";

function CartRow({ product, quantity, onQunatityChange, onRemove }) {

    function handleChange(event) {
        onQunatityChange(product.id, +event.target.value);
    }

    function handleCrossClick() {
        onRemove(product.id);
    }

    return (
        <div className="border-b border-gray-200 py-4 px-2 text-sm flex flex-col md:grid md:grid-cols-7 md:items-center gap-3">
            
            <button 
              onClick={handleCrossClick} 
              className="flex items-center justify-center cursor-pointer text-gray-400 hover:text-red-500 transition md:order-none order-1"
            >
                <ImCross />
            </button>

            
            <div className="w-20 h-20 self-center md:order-none order-2">
                <img 
                  className="w-full h-full object-cover rounded-md border" 
                  src={product.thumbnail} 
                  alt={product.title} 
                />
            </div>

            
            <h3 className="font-medium text-gray-700 hover:text-red-500 transition md:col-span-2 md:order-none order-3 text-center md:text-left">
                {product.title}
            </h3>

            
            <span className="text-gray-600 md:order-none order-4 text-center md:text-left">
                ${product.price}
            </span>

           
            <input 
                type="number" 
                className="w-16 p-1 border rounded-md text-center mx-auto md:mx-0 md:order-none order-5"
                value={quantity}
                onChange={handleChange}
            />

            
            <span className="font-semibold text-gray-700 md:order-none order-6 text-center md:text-left">
                ${product.price * quantity}
            </span>
        </div>
    );
}

export default CartRow;
