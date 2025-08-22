import { useField } from 'formik';
import React from 'react';
import FormikHOC from './FormicHOC';
function Input({name,label,id,className,Icon,touched,error,...rest}){

    let borderClass="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500";
    if(error && touched){
        borderClass="border-red-500 focus:border-red-500 focus:ring-red-500";
    }
    
    return(
        <div className='relative'>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <div className="relative flex w-full">
                {Icon && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                    <Icon size={20} />
                </span>
                )}
            
                <input 
                    id={id}
                    name={name}
                    className={`relative block w-full appearance-none rounded-md border border-gray-300 pl-10 bg-transparent
                    px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none 
                    focus:ring-indigo-500 sm:text-sm  ${borderClass} ${className}`}
                    {...rest}
                ></input>
            </div>
            {touched && error && <div className="text-red-500">{error}</div>} 
            
        </div>
    )
}
export const FormikInput=FormikHOC(Input);
export default Input;