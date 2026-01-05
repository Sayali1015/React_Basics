import React from 'react'
import Person from './components/Person'
import Strangerthings from './components/Strangerthings'
import { Test} from './components/Test'
import Product from './components/Product'
const App = () => {
  
  return (
    <>
    {/* <h1>App is an entry point</h1> */}
    {/* <Person/> */}
    {/* <Strangerthings/> */}
    {/* <Test/> */}

    <Product title = "Galaxy S24 Ultra" color = "black" brand = "Samsung" 
    prize ={150000} ram = "8GB" rom = "128 GB" camera = "200 MP"/>

    <Product title = "Iphone 16 Pro" color = "Golden" brand = "Apple" 
    prize ={250000} fingerprint = "Yes"/>
  
    <Product title = "One Plus" color = "White" brand = "OnePlus" 
    prize ={34000}/>

    </>
  )
};

export default App
