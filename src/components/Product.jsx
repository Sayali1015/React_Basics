import React from 'react'

const Product = (props) => {
    
  return (
    <div>
      <h2>Phone Name={props.title}</h2>
      <h3>Phone color= {props.color}</h3>
      <h4>Phone brand={props.brand}</h4>
      <h5>Phone Prize={props.prize}</h5>
      <h3>RAM = {props.ram}</h3>
      <h3>ROM = {props.rom}</h3>
      <h3>Camera = {props.camera}</h3>
      <h1>fingerprint= {props.fingerprint}</h1>
    </div>
  )
}

export default Product
