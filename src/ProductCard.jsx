import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ image, title, category, price, id}) {

   return (
    <div className='bg-white p-6 w-72'>
        <img src={image} alt={title} className="w-64 h-64 object-fill" />
        <p className="text-gray-600 mt-2">{category}</p>
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        <p className="text-lg font-semibold mt-2">${price}</p>
        <Link to={"/products/" + id}>
        <button className='bg-red-300 border-2 border-red-500 text-white px-4 py-1 rounded mt-2 hover:bg-red-400'>
           More details
        </button>
        </Link>
    </div>
  );
}
export default ProductCard;