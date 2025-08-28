import React, { memo } from 'react';
import ProductCard from "./ProductCard";

function ProductList({ products}) {
  return (
    <div className="bg-white m-12 mt-0 mb-0 p-4 justify-center gap-2 grid grid-cols-3">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          category={item.category}
          price={item.price}
          moreDetails={item.moreDetails}
        />
      ))}
    </div>
  );
}

export default memo(ProductList);
