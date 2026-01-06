import React from 'react'
import Person from './components/Person'
import Strangerthings from './components/Strangerthings'
import { Test} from './components/Test'
import Product from './components/Product'
import Person2 from './components/Person2'
import Person3 from './components/Person3'


const App = () => {
  return (
    <>
    {/* <h1>App is an entry point</h1> */}
    {/* <Person/> */}
    {/* <Strangerthings/> */}
    {/* <Test/> */}
  


{/* <div>
  
    <Product title = "Galaxy S24 Ultra" color = "black" brand = "Samsung" 
    prize ={150000} ram = "8GB" rom = "128 GB" camera = "200 MP"/>

    <Product title = "Iphone 16 Pro" color = "Golden" brand = "Apple" 
    prize ={250000} fingerprint = "Yes"/>
  
    <Product title = "One Plus" color = "White" brand = "OnePlus" prize ={34000}/> 
    </div> */}


{/* <div>
    <Person2 name= "Sayali Rajwade" MobileNumber= {9021628100} Gmail= "sayalirajwade077@gmail.com" pincode = {411017}/>
    <Person2 name= "Kunal Rajwade" MobileNumber= {7498853712} Gmail= "kunalrajwade09@gmail.com" pincode = {411018}/>
    <Person2 name= "Om Gaikwad" MobileNumber= {9763121262} Gmail= "omgaikwad12@gmail.com" pincode = {411003} ram = "sita"/>
</div> */}

<div>
    <Person3 name= "Durvesh Shinde" age= {22} pancard = {true} />
</div>


    </>
  )
};

export default App
