import ProductList from "./ProductList";
import { useState } from 'react';
import alldata from './alldata';

function Filter(){
    const [query, setQuery]=useState('');
  const [sort, setSort]=useState("default");

  let data=alldata.filter(function(item){
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
  return(
    <>
    <div className="bg-white m-12 mb-0 flex justify-end ">
        <input 
            value={query}
            placeholder='search' 
            onChange={handleQueryChange}      
            className='border-4 border-gray-300 rounded p-2 mr-4 mt-4'
        />
        <label htmlFor="sorting" className=" text-black font-semibold "></label>
        <select onChange={handleSortChange} value={sort} name="sorting" id="sorting" className='mr-12 mt-4 border-4' >
            <option value="default">Default</option>
            <option value="sortName">Sort by name</option>
            <option value="sortLH">Sort by price: low to high</option>
            <option value="sortHL">Sort by price: high to low</option>
        </select>
    </div>
    <ProductList products={data} />
    </>
  )
}
export default Filter;