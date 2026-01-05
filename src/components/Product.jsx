import React from 'react'

const Product = () => {
    const obj = {
        title : "Galaxy S24 ultra",
        color : "Black",
        brand : "Samsung",
        prize : "30000"
    }
  return (
    <div>
      <h2>Phone Name={obj.title}</h2>
      <h3>Phone color= {obj.color}</h3>
      <h4>Phone brand={obj.brand}</h4>
      <h5>Phone Prize={obj.prize}</h5>
    </div>
  )
}

export default Product
