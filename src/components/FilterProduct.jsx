import React from 'react'

const FilterProduct = () => {
    const product =[
        {id:1, title: 'iphone', category: 'Mobile', price: 90000},
        {id:2, title: 'Asus', category: 'Laptop', price: 100000},
        {id:3, title: 'Mi', category: 'Tablet', price: 20000},
        {id:4, title: 'Boat', category: 'Speaker', price: 30000},
         {id:5, title:'HP', category: 'Laptop', price: 480000},
         {id:6, title: 'Boat', category: 'HeadPhone', price: 2000},

    ]
    const filtereddata = product.filter((data)=>data.category == 'Laptop')
    console.log(filtereddata);
  return (
    <div>
      {filtereddata.map((data)=><div key={data.id}>
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
        <h1>{data.category}</h1>
      </div>)}
    </div>
  )
}

export default FilterProduct
