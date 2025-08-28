import React, { useEffect, useState } from "react";
import { GetProductData, getProductsByIds } from "./api";
import Loading from "./Loading";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { WithCart } from "./WithProvider";

function CartPage() {

  return (
    <div className="px-6 py-10">
      <Link
        to="/dashboard"
        className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-6"
      >
        <HiArrowNarrowLeft className="text-2xl" />
        <span className="text-lg font-medium">Back</span>
      </Link>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
}

export default WithCart(CartPage);
