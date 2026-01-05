import React from 'react'

const App = () => {
  const name = "Sayali Rajwade";
  const age = 20;
  const person = {
    name: 'Kunal Rajwade',
    age : 19,
    gmail: 'kunal@gmail.com',
    pincode: 411017
  }

  const product = {
    title: 'iphone',
    prize: 150000,
    modle: 'iphone 15 pro max'

  }
  
  return (
    <>
   
    <div>
      {/* <h1>Web Dev</h1>
      <h2>{name}</h2>
      <h2>age = {age}</h2>
      <h3>We are learning React.</h3>
      <h1>3+3</h1>
      <h1>{3/3}</h1>*/}
      <h1>Name = {person.name}</h1>
      <h1>Age = {person.age}</h1>
      <h1>gmail = {person.gmail}</h1>
      <h1>pincode = {person.pincode}</h1>
    </div>

    <div>
      <h3>Title = {product.title}</h3>
      <h3>Modle = {product.modle}</h3>
      <h3>Prize = {product.prize}</h3>
    </div>

     </>
  )
}

export default App
