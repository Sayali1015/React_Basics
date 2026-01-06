import React from 'react'

const Events = () => {
    const handleClick = () =>{
        alert('You click the button.')
    }

    const addition = (a)=>{
        alert(a+10)
    }

    const name = (name)=>{
        alert ("Sayali Rajwade")
    }
  return (
    <div>
      <h1>we are learning events</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>addition(20)}>click for addition</button>
      <button onClick={name}>Click me for name</button>
    </div>
  );
};

export default Events
