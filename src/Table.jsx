import React, { useState } from "react";
import TableRow from "./TableRow";

const data={
    table1:2,
    table2:2
}
function Table(){
    const [num,UpdateNum]=useState(2);
    function nextTable(){
      UpdateNum(num+1);
    }
  return (
    <>
    <div className="p-2">
            <button onClick={nextTable} className="rounded-md px-4 py-1 bg-indigo-700 text-white">
                Next
            </button>
            <TableRow number={num} index={1}></TableRow>
            <TableRow number={num} index={2}></TableRow>
            <TableRow number={num} index={3}></TableRow>
            <TableRow number={num} index={4}></TableRow>
        </div>
    </>
  )
}
export default Table; 