import React from 'react'

const Product = ({title, color, brand, prize, ram, rom, camera, fingerprint}) => {
    
  return (
    <div>
      <h2>Phone Name={title}</h2>
      <h3>Phone color= {color}</h3>
      <h4>Phone brand={brand}</h4>
      <h5>Phone Prize={prize}</h5>
      <h3>RAM = {ram}</h3>
      <h3>ROM = {rom}</h3>
      <h3>Camera = {camera}</h3>
      <h1>fingerprint= {fingerprint}</h1>
    </div>
  )
}

export default Product
