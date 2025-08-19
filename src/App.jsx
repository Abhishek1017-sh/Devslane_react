import React, { useCallback, useMemo, useState } from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import Details from './MoreDetails';
import CartPage from './CartPage';

function App() {

  const savedDataString=localStorage.getItem("my-cart") || "{}";
  const savedData=JSON.parse(savedDataString);

  const [cart,setCart]=useState(savedData);
  

  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }, [cart]);
  
  const totalCount = useMemo(() => {
    return Object.values(cart ||{}).reduce((total, qty) => total + qty, 0);
  }, [cart]);

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
  }

  return (
    <>
        <div className='bg-gray-300 h-screen overflow-y-auto flex flex-col'>
          <Header productCount={totalCount}/>
          <div className='grow'>
            <Routes>
                <Route index element={<HomePage />}></Route>
                <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart}/>}></Route>
                <Route path="/products/:id" element={<Details onAddToCart={handleAddToCart}/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
    </>
  )
}

export default App;
