import React from 'react'
import { useState } from 'react'

const Multiple_Form_Handling = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    age:'',
    phone_number:''
  });


const onChangeHandler = (e) => {
  const {name,value} = e.target



  setFormData({...formdata, [name]:value})

  
}


const submitHandler= (e)=> {
  e.preventDefault();
  alert ("your form has been submitted");

  console.log(formdata);

  setFormData({
    name: '',
    email: '',
    password:'',
    age:'',
    phone_number:''
  })
}

  return (
   <>
   <form onSubmit={submitHandler}>
    Name: <input name="name" value={formdata.name} placeholder="Enter your name" onChange={onChangeHandler} type="text"
/>

     <div>
      Email: <input value={formdata.email} name='email' onChange={onChangeHandler} type="email" />
    </div>
     <div>
      Password: <input value={formdata.password} name='password' onChange={onChangeHandler} type="password" />
    </div>
     <div>
      Age: <input value={formdata.age} name ='age'onChange={onChangeHandler} type="number" />
    </div>
     <div>
      Phone_Number: <input value={formdata.phone_number} name= 'phone_number' onChange={onChangeHandler} type="number" />
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
   </form>
   </>
  )
}

export default Multiple_Form_Handling
