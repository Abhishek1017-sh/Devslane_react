import React, { useState, useCallback } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage';
import Details from './MoreDetails';
import NotFound from './NotFound';
import { WithCart, WithUser } from './WithProvider';

function Dashboard({ user,cart, updateCart , handleAddToCart}) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="grow">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default WithUser(WithCart(Dashboard));
