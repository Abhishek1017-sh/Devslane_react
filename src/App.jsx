import React, { useState } from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import Details from './MoreDetails';

function App() {

  const savedDataString=localStorage.getItem("my-cart") || "{}";
  const savedData=JSON.parse(savedDataString);

  const [cart,setCart]=useState(savedData);
  const  [count,setCount]=useState(0);
  function handleChangeCount(){
    setCount(count+1);
  }

  function handleAddToCart(productId,count){
    const oldCount=cart[productId] || 0;
    // const newCart={...cart};
    // newCart[productId]=oldCount+count;
    // setCart(newCart);
    const newCart={...cart,[productId]:oldCount+count};
    setCart(newCart);
    const cartString=JSON.stringify(newCart);
    localStorage.setItem("my-cart",cartString);
  }
  const totalCount=Object.keys(cart).reduce(function(previous,current){
    return previous+cart[current];
  },0);

  return (
    <>
        <div className='bg-gray-300 h-screen overflow-y-auto flex flex-col'>
          <Header productCount={totalCount}/>
          <div className='grow'>
            <button onClick={handleChangeCount} className='p-2 bg-indigo-200'>Change count</button>
            <Routes>
                <Route index element={<HomePage />}></Route>
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
