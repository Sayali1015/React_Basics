import React from 'react'

const Showproducts = () => {
    let products = [
        {id: 1,title: 'iphone 15',price: 160000},
        {id: 2,title: 'Samsung',price: 300000},
        {id: 3,title: 'Realme',price: 250000},
        {id: 4,title: 'iphone 16',price: 180000}
        
    ]
  return (
    <div>
      {products.map((data)=><div key={data.id}>
        <h1>title = {data.title}</h1>
        <h1>Price= {data.price}</h1>
      </div>)}
    </div>
  )
}

export default Showproducts
