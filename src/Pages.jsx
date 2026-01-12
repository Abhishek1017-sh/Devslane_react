import { HiArrowNarrowRight } from "react-icons/hi";
export default function Pages(){
    return(
        <>
            <div className="flex m-12 pb-20  p-4 mt-0 bg-white  gap-2">
                <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded hover:bg-red-400">1</button>
                <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded hover:bg-red-400">2</button>
                <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded hover:bg-red-400"><HiArrowNarrowRight /></button>
            </div>
        </>
    )
}