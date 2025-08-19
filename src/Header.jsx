import React, { memo } from 'react';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router';

function Header({productCount}) {
  return (
    <div>
      <nav className="bg-white shadow-md flex items-center justify-between px-10 py-4">
        <div className="flex items-center">
          <img src="/Cartzy.logo.png" alt="Cartzy Logo" className="h-12 w-auto object-contain" />
        </div>
        <div className="text-2xl text-gray-700">
          <Link to="/cart" className="mr-4">
            <BsBag /><span>{productCount}</span>
          </Link>
          
        </div>
      </nav>
    </div>
  );
}
export default memo(Header);
