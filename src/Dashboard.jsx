import React, { useState, useCallback } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import WithUser from './WithUser';
import HomePage from './HomePage';
import CartPage from './CartPage';
import Details from './MoreDetails';
import NotFound from './NotFound';

function Dashboard({ user,cart, updateCart }) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }, [cart, updateCart]);

  return (
    <>
      <div className="grow">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
          <Route path="products/:id" element={<Details onAddToCart={handleAddToCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default WithUser(Dashboard);
