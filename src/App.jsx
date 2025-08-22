import React, { useMemo, useState, createContext, useEffect } from 'react';
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

export const UserContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  const token = localStorage.getItem("token");

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("User fetched:", response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Unauthorized:", err);
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoadingUser(false));
    } else {
      setLoadingUser(false);
    }
  }, []);

  console.log("logged in user is:", user);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  const totalCount = useMemo(() => {
    return Object.values(cart || {}).reduce((total, qty) => total + qty, 0);
  }, [cart]);

  if (loadingUser) {
    return <div>Loading...</div>
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="bg-gray-300 h-screen overflow-y-auto flex flex-col">
        <Header productCount={totalCount} setUser={setUser} />
        <div className="flex flex-1 justify-center items-center">
          <Routes>
            <Route path="/dashboard/*" element={<UserRoutes><Dashboard cart={cart} updateCart={setCart}/></UserRoutes>} />
            <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
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
    </UserContext.Provider>
  )
}

export default App;
