import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { MdOutlineWarningAmber } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import WithProvider, { WithAlert } from "./WithProvider";
import { AlertContext } from "./Contexts";

function Alert({ alert, setAlert }) {
    if(!alert) return;
    const { message, type } = alert || {};
    let color = "";
    let Icon = null;
    let heading = "";

    useEffect(
        function () {
            if(alert){
                const timeOut=setTimeout(() => setAlert(undefined),3 * 1000)
                return function(){
                    clearTimeout(timeOut);
                };
            }
        },[alert])

    if (type === "success") {
        color = "bg-green-100 border-green-500 text-green-700";
        Icon = AiOutlineCheckCircle;
        heading = "Success";
    } else if (type === "error") {
        color = "bg-red-100 border-red-500 text-red-700";
        Icon = MdOutlineDangerous;
        heading = "Error";
    } else {
        color = "bg-yellow-100 border-yellow-500 text-yellow-700";
        Icon = MdOutlineWarningAmber;
        heading = "Warning";
    }

    if (!message) return null;

    return (
        <div
        className={`flex items-start justify-between w-full max-w-md mx-auto m-4 p-4 border-l-4 rounded-xl shadow-md ${color}`}
        role="alert"
        >
        <div className="flex items-start gap-3">
            <Icon className="text-2xl flex-shrink-0" />
            <div>
            <p className="font-semibold">{heading}</p>
            <p className="text-sm">{message}</p>
            </div>
        </div>
        <button
            onClick={() => setAlert(undefined)}
            className="ml-4 text-xl opacity-70 hover:opacity-100 transition"
        >
            <IoClose />
        </button>
        </div>
    );
}

export default WithAlert(Alert);
