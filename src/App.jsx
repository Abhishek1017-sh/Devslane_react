import React, { useState } from 'react';
import Details from './MoreDetails';
import { Link, Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <>
        <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="/products/:id" element={<Details />}></Route>
          </Routes>
    </>
  )
}

export default App;
