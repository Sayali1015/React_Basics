import React from 'react'
import './Laptop.css'

const Laptop = ({brand, price, colour, weight}) => {

    //Internal Css
    const obj = {
        backgroundColor: 'blue',
        padding: '15px',
        margin: '15px',
        borderRadius: '10px',
        border : '5px solid pink'

    }

  return (
    <div  //inline CSS 1st prioprity

//============Inline Css Command======================================
    // style={{backgroundColor:'grey' , 
    //         padding: '10px',
    //         margin: '20px', 
    //         borderRadius: '10px', 
    //         border: '2px solid yellow' 
    //         }}

//=============Internal CSS Command=============================
    // style={obj}
    
//============External Css Command================================
    className='div'
    
    >
   
      <h3>BrandName = {brand}</h3>
      <h3>Price = {price}</h3>
      <h3>Colour = {colour}</h3>
      <h3>weight = {weight}</h3>
    </div>
    
  )
}

export default Laptop
