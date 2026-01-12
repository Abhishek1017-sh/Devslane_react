import ProductList from "./ProductList";
import React, { useEffect, useState, useMemo, memo, useCallback } from 'react';
import { GetProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function Filter(){

  const [productList,setproductList]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(function(){
    const xyz=GetProductList();
    xyz.then(function(products){
      setproductList(products);
      setLoading(false);
    })
    
  },[]);

  const [query, setQuery]=useState('');
  const [sort, setSort]=useState("default");

  const filteredData = useMemo(() => {
    let data = productList.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === 'sortLH') data.sort((a, b) => a.price - b.price);
    if (sort === 'sortHL') data.sort((a, b) => b.price - a.price);
    if (sort === 'sortName') data.sort((a, b) => a.title.localeCompare(b.title));
    return data;
  }, [productList, query, sort]);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSort(e.target.value);
  }, []);
  
  if(loading){
    return <Loading />;
  }
  return(
    <>
    <div className="bg-white m-12 mb-0 flex justify-end flex-wrap">
        <input 
            value={query}
            placeholder='search' 
            onChange={handleQueryChange}      
            className='border-4 border-gray-300 rounded p-2 mr-4 mt-4 hover:bg-gray-200'
        />
        <label htmlFor="sorting" className=" text-black font-semibold "></label>
        <select onChange={handleSortChange} value={sort} name="sorting" id="sorting" className='mr-12 mt-4 border-4  hover:bg-gray-200' >
            <option value="default">Default</option>
            <option value="sortName">Sort by name</option>
            <option value="sortLH">Sort by price: low to high</option>
            <option value="sortHL">Sort by price: high to low</option>
        </select>
    </div>
    {filteredData.length >0 && <ProductList products={filteredData} />}
    {filteredData.length == 0 && <NoMatching />}
    </>
  )
}
export default memo(Filter);