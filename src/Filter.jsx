import ProductList from "./ProductList";
import { useEffect, useState } from 'react';
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

  let data=productList.filter(function(item){
    const lowerCaseTitle=item.title.toLowerCase();
    const lowerCaseQuery=query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery)!=-1;
  })
  
  if(sort === 'sortLH'){
    data=data.sort(function(a,b){
      return Number(a.price) - Number(b.price);
    });
  }
  if(sort === 'sortHL'){
    data=data.sort(function(a,b){
      return Number(b.price) - Number(a.price);
    });
  }
  if(sort === 'sortName'){
    data=data.sort(function(a,b){
      return a.title.localeCompare(b.title);
    });
  }

  function handleQueryChange(event){
    setQuery(event.target.value);
  }
  function handleSortChange(event){
    setSort(event.target.value);
  }
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
    {data.length >0 && <ProductList products={data} />}
    {data.length == 0 && <NoMatching />}
    </>
  )
}
export default Filter;