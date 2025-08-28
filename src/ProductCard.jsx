import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ thumbnail, title, category, price, id }) {
  return (
    <div className='bg-white p-2 w-full h-full flex flex-col items-center shadow'>
      <div className="w-full aspect-square overflow-hidden">
        <img src={thumbnail} alt={title} loading='lazy' className="w-full h-full object-cover rounded" />
      </div>
      <div className='w-full text-center px-2 flex flex-col flex-1'>
        <p className="text-gray-600 mt-2 text-xs md:text-sm lg:text-base">{category}</p>
        <h2 className="text-base md:text-lg lg:text-xl font-bold mt-2">{title}</h2>
        <p className="text-sm md:text-base lg:text-lg font-semibold mt-1">${price}</p>
        <Link to={`/dashboard/products/${id}`}>
          <button className='bg-red-300 border-2 border-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-400 text-xs md:text-sm'>
            More details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default memo(ProductCard);
