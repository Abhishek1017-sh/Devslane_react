import React, { useEffect, useState } from "react";
import { GetProductData } from "./api";
import Loading from "./Loading";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const cartObj = cart || {};
  const productIds = Object.keys(cartObj);

  useEffect(() => {
    setLoading(true);
    const myProductPromises = productIds.map((id) => GetProductData(id));
    Promise.all(myProductPromises).then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

  if (loading) return <Loading />;

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
        <CartList products={products} cart={cart} updateCart={updateCart} />
        <CartTotal cartItems={products} cartData={cart} />
      </div>
    </div>
  );
}

export default CartPage;
