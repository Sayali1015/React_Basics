import React, { useState } from 'react'

const Counter = () => {
    

const [counter , setCounter] = useState(0)

    const [product, setproduct] = useState('iphone')
    const [arr, setArr] = useState([10,20,30])
    const [obj, setObj] = useState({
        name: 'sayali', 
        salary: 15000, 
        age: 21 , 
        location: 'Pune'})

    const increaseBy1 = () =>{
        // counter++;
        setCounter(counter + 1)
        console.log("Counter = " , counter);
    }

    const decreaseBy1 = () =>{
        // counter--;
        setCounter(counter - 1)
        console.log("Counter = ",counter);
    }
  return (
    <div>
        <h1>{obj.name}</h1>
        <h1>{obj.salary}</h1>
      <h1>{counter}</h1>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
    </div>
  );
};

export default Counter
