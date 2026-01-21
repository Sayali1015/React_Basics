import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
    <div>
      <h1>This is a block component</h1>
      <Panchayat money = {money}/>
    </div>
  )
}

export default Block
