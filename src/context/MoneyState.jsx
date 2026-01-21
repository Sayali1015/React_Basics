import React, { useState } from 'react'
import MoneyContext from './MoneyContext'


const MoneyState = (props) => {
   const money = 20;
   const dollar = 10;
   const [counter, setCounter] = useState(0)
   const name = 'sayali'
  return (
    <div>
      <MoneyContext.Provider 
      value={{
        money, 
        dollar,
        name,
        counter,
        setCounter,
      }}>
        {props.children}</MoneyContext.Provider>
    </div>
  )
};

export default MoneyState
