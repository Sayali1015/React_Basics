import React from 'react'

const Person3 = ({name, age}) => {
  return (
    <div> 
        <h1> Name = {name}</h1>
        <h1>Your age is :{age}</h1>
        <h3>{age >= 18 ? <h1>You can drive</h1> : <h1>You cannot drive</h1>}
     </h3>
     
     </div>
    
  )
}

export default Person3
