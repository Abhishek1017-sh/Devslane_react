import React, { useMemo, useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from "./LoginForm";
import Signup from "./SignupForm.jsx";
import ForgotPassword from "./ForgotPassword";
import cartzyImage from './assets/Cartzy.logo.png';
import Dashboard from "./Dashboard.jsx";
import axios from "axios";
import AuthRoute from "./AuthRoute.jsx";
import UserRoutes from "./UserRoutes.jsx";
import Alert from './Alert.jsx';
import { UserContext, AlertContext } from './Contexts';
import UserProvider from "./providers/UserProvider"
import AlertProvider from "./providers/AlertProvider"
import CartProvider from './providers/CartProvider.jsx';
import { WithCart } from './WithProvider.jsx';

function App({cartCount}) {
  const [query, setQuery] = useState("");

  return (
    <UserProvider>
      <CartProvider>
      <AlertProvider>
      <div className="bg-gray-300 h-screen overflow-y-auto flex flex-col">
        <Header productCount={cartCount} />
        <Alert/>
        <div className="flex flex-1 justify-center items-center">
          <Routes>
            <Route path="/dashboard/*" element={<UserRoutes><Dashboard /></UserRoutes>} />
            <Route path="/login" element={<AuthRoute> <Login /> </AuthRoute>} />
            <Route path="/signup" element={<AuthRoute> <Signup /> </AuthRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="*"
              element={
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-5xl mb-6 font-extrabold drop-shadow-lg">
                    Welcome to Cartzy
                  </h1>
                  <img
                    src={cartzyImage}
                    alt="Cartzy Logo"
                    className="h-48 md:h-64 w-auto mx-auto mb-8 drop-shadow-lg rounded-lg"
                  />
                  <div className="space-x-4">
                    <Link
                      to="/login"
                      className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
      </AlertProvider>
      </CartProvider>
      </UserProvider>
  )
}

export default WithCart(App);
