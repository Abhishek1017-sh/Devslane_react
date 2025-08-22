import React, { memo } from 'react';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router';
import Button from './Button';
import cartzyImage from './assets/Cartzy.logo.png';

function Header({productCount,setUser}) {
  return (
    <div>
      <nav className="bg-white shadow-md flex items-center justify-between px-10 py-4">
        <div className="flex items-center">
          <img src={cartzyImage} alt="Cartzy Logo" className="h-12 w-auto object-contain" />
        </div>
        <div className="text-2xl text-gray-700">
          <Link to="/dashboard/cart" className="mr-4">
            <BsBag /><span>{productCount}</span>
          </Link>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              setUser(undefined);
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
}
export default memo(Header);
