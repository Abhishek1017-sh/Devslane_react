import ProductList from "./ProductList";
import React, { useEffect, useState, useMemo, memo, useCallback, useContext } from 'react';
import { GetProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { UserContext } from "./Contexts";
import { Link, useParams, useSearchParams } from "react-router";


function Filter(){
  const [productData,setproductData]=useState({data:[],meta: { last_page: 1 }});
  const [loading,setLoading]=useState(true);
  
  let [searchParams,setSearchParams]=useSearchParams();

  const params=Object.fromEntries([...searchParams]);

  let {query,sort,page}=params;

  sort=sort || "default";
  query=query || "";
  page= +page || 1;

  useEffect(function(){
    let sortBy;
    let sortType;
    if(sort=="title"){
      sortBy="title";
    }
    else if(sort=="sortLH"){
      sortBy="price";
      // sort="asc"; {default is ascending}
    }
    else if(sort=="sortHL"){
      sortBy="price";
      sortType="desc";
    }
    GetProductList({sortBy,search:query,page,sortType}).then(function(body){
      setproductData({
        data: body?.data || [],
        meta: body?.meta || { last_page: 1 }
      });
      setLoading(false);
    })
  },[sort,query,page]);

  const handleQueryChange = useCallback((e) => {
    setSearchParams({...params,query:e.target.value,page:1},{replace:false});
  }, [params, setSearchParams]);

  const handleSortChange = useCallback((e) => {
    setSearchParams({...params,sort:e.target.value,page:1},{replace:false});
  }, [params, setSearchParams]);
  
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
            <option value="title">Sort by name</option>
            <option value="sortLH">Sort by price: low to high</option>
            <option value="sortHL">Sort by price: high to low</option>
        </select>
    </div>
    {productData.data.length >0 && <ProductList products={productData.data} />}
    {productData.data.length == 0 && <NoMatching />}
    <div className="flex m-12 pb-20 p-4 mt-0 bg-white gap-2">
      {/* Prev Button */}
          {page > 1 && (
          <Link
            to={"?" + new URLSearchParams({ ...params, page: page - 1 })}
            className="px-6 py-2 rounded border-4 bg-gray-300 border-gray-400 text-black hover:bg-gray-400"
          >
            Prev
          </Link>
          )}

      {/* Numbered Pages */}
          {[...Array(productData.meta.last_page).keys()].map(pageNo => {
              const pageNumber = pageNo + 1;
              const isActive = pageNumber === page;
              return (
                <Link
                  key={pageNumber}
                  to={"?" + new URLSearchParams({ ...params, page: pageNumber })}
                  className={`px-6 py-2 rounded border-4 
                    ${isActive 
                      ? "bg-red-600 border-red-700 text-white font-bold"
                          : "bg-red-300 border-red-500 text-white hover:bg-red-400"
                    }`}
                >
                  {pageNumber}
                </Link>
              );
          })}

        {/* Next Button */}
          {page < productData.meta.last_page && (
          <Link
            to={"?" + new URLSearchParams({ ...params, page: page + 1 })}
            className="px-6 py-2 rounded border-4 bg-gray-300 border-gray-400 text-black hover:bg-gray-400"
          >
            Next
          </Link>
          )}
      </div>
    </>
  )
}
export default memo(Filter);