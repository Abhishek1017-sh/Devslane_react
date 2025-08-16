import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./LoginForm";
import Signup from "./SignupForm.jsx";
import ForgotPassword from "./ForgotPassword";
import Input from "./Input";
import { MdShoppingCartCheckout } from "react-icons/md";
import cartzyImage from 'src\assets\Cartzy.logo.png';

function App() {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    console.log("calling api here", query);
  }, [query]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-500 via-black-600 to-white-700">
        <div className="flex justify-between items-center p-5 bg-white shadow-md">
          <div className="flex">
          <h1 className="text-2xl font-bold text-blue-600">Cartzy</h1>
          <MdShoppingCartCheckout className="w-8 h-auto text-black" />
          </div>
          <Input
            onChange={handleSearch}
            value={query}
            id="search"
            label="Search"
            placeholder="Search..."
            className="w-48 md:w-64"
          />
        </div>

        {/* Routes */}
        <div className="flex flex-1 justify-center items-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
                    className="h-48 md:h-64 w-auto mx-auto mb-8 drop-shadow-lg"
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
      </div>
    </Router>
  );
}

export default App;
