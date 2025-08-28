import React, { memo, useContext } from 'react';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router';
import Button from './Button';
import cartzyImage from './assets/Cartzy.logo.png';
import { UserContext } from './Contexts';
import { WithCart } from './WithProvider';

function Header({cartCount }) {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <nav className="bg-white shadow-md flex items-center justify-between px-10 py-4">
        <div className="flex items-center">
          <img src={cartzyImage} alt="Cartzy Logo" className="h-12 w-auto object-contain" />
        </div>

        <div className="flex items-center text-gray-700">
          {/* Cart Icon with Badge */}
          <Link to="/dashboard/cart" className="relative mr-6">
            <BsBag className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
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

export default WithCart(memo(Header));
