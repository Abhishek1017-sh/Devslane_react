import React from 'react';

function ProductCard({ image, title, category, price}) {
   return (
    <div className='bg-white p-6  w-84'>
      <img src={image} alt={title} className="w-64 h-64 object-fill" />
        <p className="text-gray-600 mt-2">{category}</p>
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        <p className="text-lg font-semibold mt-2">${price}</p>
    </div>
  );
}
export default ProductCard;
