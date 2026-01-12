import axios from "axios";

export function GetProductData(id){
    return axios.get('https://dummyjson.com/products/'+id).then(function(response){
        return response.data;
    });
}

export function GetProductList(){
    return axios.get('https://dummyjson.com/products').then(function(response){
        return response.data.products;
    });
    
}