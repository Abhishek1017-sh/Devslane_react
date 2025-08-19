import React from "react";

function Button(props){
    return (
        <button 
        {...props} 
        className=" px-4 py-2 rounded border-2 font-bold text-sm
         bg-orange-800 text-white hover:bg-orange-600"></button>
    )
}
export default Button;