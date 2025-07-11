import { useState } from 'react'
import Table from "./Table";

let num=2;
function App() {
  return(
    <div class="flex gap-3">
        <Table></Table>
        <Table></Table>
    </div>
  )
}

export default App