import React, { memo } from "react";

function Button({type,className,children,onClick,disabled}){
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={"border bg-indigo-600 disabled:bg-red-200 p-2 rounded-xl font-semibold self-end mt-3 hover:bg-indigo-400 " + className}>
                {children}
        </button>
    )
}
export default memo(Button);