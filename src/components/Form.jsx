import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Your form has been submitted. "+name+" "+email+" "+password);
        setName('');
        setEmail('');
        setPassword('');alert("Your form has been submitted."+name+" "+email+" "+password)


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            Name: <input value={name}  
            onChange={(e)=>setName(e.target.value)}
            type="text" />
        </div>
        {/* <h2>{name}</h2> */}
        <div>
            Email: <input  value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            type="email" />
        </div>
        {/* <h2>{email}</h2> */}
        <div>
            Password: <input  value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="password" />
        </div>
        {/* <h2>{password}</h2> */}
        <div><button type='submit'>Submit</button></div>
        </form>
    </div>
  )
}

export default Form
