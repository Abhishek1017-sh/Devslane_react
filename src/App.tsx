import React from "react";
import { TodoProvider } from "./context/TodoContext";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
      <div className="min-h-screen bg-white p-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App;
