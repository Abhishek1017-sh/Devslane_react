import React from 'react';
import { BsBag } from "react-icons/bs";

function Header({productCount}) {
  return (
    <div>
      <nav className="bg-white shadow-md flex items-center justify-between px-10 py-4">
        <div className="flex items-center">
          <img src="/Cartzy.logo.png" alt="Cartzy Logo" className="h-12 w-auto object-contain" />
        </div>
        <div className="text-2xl text-gray-700">
          <BsBag />
          <span>{productCount}</span>
        </div>
      </nav>
    </div>
  );
}
export default Header;
