import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
export default function NotFound(){
    return(
    <div className="items-center justify-center m-6 flex flex-col ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jBMmIWzg2BRnKuvdo54IudX99pgx3uwPew&s"
            alt="404 Not Found"
            className="w-64 h-64 "
        ></img>
        <div className="m-6"> 
            <Link to="/" className="text-2xl text-white bg-black border-1 rounded-4xl p-2">
                Go Home
            </Link>
        </div>
    </div>
    );
}