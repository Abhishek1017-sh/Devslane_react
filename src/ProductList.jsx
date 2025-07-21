import React from 'react';
import ProductCard from "./ProductCard";

function ProductList({products=[]}){
    return (
        <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-2">
            {products.map(function(item){
                return (
                <ProductCard
                    key={item.title}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    moreDetails={item.moreDetails}
                />
                );
            })}
        </div>
    )
}
export default ProductList;