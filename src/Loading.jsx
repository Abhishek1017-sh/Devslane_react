import React from "react";
import { ImSpinner } from "react-icons/im";

export default function Loading(){
    return <div className='grow text-6xl flex items-center justify-center'><ImSpinner className="animate-spin"/></div>
}
