import React from "react";
import Button from "./Button";

export default function CartTotal({ cartItems, cartData }) {
  function totalAmount() {
    return cartItems
      .reduce((total, item) => {
        const quantity = cartData[item.id] || 0;
        return total + item.price * quantity;
      }, 0)
      .toFixed(2);
  }

  return (
    <div className="flex justify-end px-4 sm:px-8 lg:px-16">
      <div className="my-8 w-full sm:w-[60%] lg:w-[30%] rounded-2xl bg-gray-50 shadow p-6">
        
        <h3 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-3">
          Cart Totals
        </h3>

        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold text-gray-800">${totalAmount()}</p>
        </div>

        <div className="flex justify-between items-center py-2 border-t mt-2">
          <p className="text-lg font-medium text-gray-700">Total</p>
          <p className="text-lg font-bold text-gray-900">${totalAmount()}</p>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-700" >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
