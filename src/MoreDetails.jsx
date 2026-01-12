import React, { useEffect, useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GetProductData } from './api';
import Loading from './Loading';
import NotFound from './NotFound';
export default function Details({onAddToCart}) {
    const id = +(useParams().id);
    const [product,setProduct]=useState();
    const [loading,setLoading]=useState(true);
    const [count, setCount]=useState(1);
    useEffect(function(){
        setLoading(true);
        setCount(1);
        const p=GetProductData(id);
        p.then(function(product){
            setProduct(product);
            setLoading(false);
        }).catch(function(){
            setLoading(false);
        })
    },[id]);

    function handleCountChange(event){
        setCount(+event.target.value);
    }

    function handleButtonClick(){
        onAddToCart(id,count);
    }

    if(loading){
        return <Loading />
    }
    if(!product){
        return <NotFound />
    }
    return (
    <>
        <div className= 'bg-gray-100'>
        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition px-6 py-4 w-fit">
            <HiArrowNarrowLeft className="text-2xl" />
            <span className="text-lg font-medium">Back</span>
        </Link>
        </div>
         <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
            
            <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row">
                <div className="flex items-center justify-center md:w-1/2 w-full p-8">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-contain rounded-lg w-full h-full max-h-[400px] max-w-[400px] bg-gray-50"
                    />
                </div>
                <div className="w-1/2 h-full p-8 flex flex-col">
                    <div>
                        <h1 className="text-5xl mb-6">{product.title}</h1>
                        <h2 className="text-3xl mb-4">Price: ${product.price}</h2>
                        <p className="mb-8">
                            {product.description}
                        </p>
                        <div className="flex gap-4 mb-2 ">
                            <input className="bg-white border-2 h-10 w-14" type="number" min="1" value={count} onChange={handleCountChange}></input>
                            <button onClick={handleButtonClick} className="bg-red-500 text-white px-4 h-10 py-2 rounded  hover:bg-red-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div>
            {id>1 && <Link to={"/products/"+(id-1)} className="flex items-center gap-2 text-gray-600 hover:text-black transition px-6 py-4 w-fit">
                <HiArrowNarrowLeft className="text-2xl" />
                <span className="text-lg font-medium">Previous</span>
            </Link>}
            </div>
            <div>
            <Link to={"/products/"+(id+1)} className="flex items-center gap-2 text-gray-600 hover:text-black transition px-6 py-4 w-fit">
                <HiArrowNarrowRight className="text-2xl" />
                <span className="text-lg font-medium">Next</span>
            </Link>
            </div>
        </div>
        </>
    );
}