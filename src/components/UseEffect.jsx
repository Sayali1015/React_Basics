import React from 'react'
import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0)
  useEffect(() => {

    document.title = counter


   console.log("UseEffect is running....");
  }, [counter])
  return (
    <div>
      <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default UseEffect
