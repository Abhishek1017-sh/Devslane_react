import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <TodoProvider>
      <Router>
        <div className="min-h-screen bg-white p-10">
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}