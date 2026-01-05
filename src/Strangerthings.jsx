import React from 'react'

const Strangerthings = () => {
    const role = {
        Character_Name0: "Eleven",
        Character_Name1: "Distin",
        Character_Name2: "Mike",
        Character_Name3: "Madmax",
        Character_Name4: "Lucas",
        Character_Name5: "Will",
        Character_Name6: "Steve",
        Character_Name7: "Nancy",
        Character_Name8: "Jhonathan",
        Character_Name9: "Hopper",
        Character_Name10: "Joyce"
    }

  return (
    
    //   <div>
    //   <h1>Stranger Things Characters</h1>
    //   <ul>
    //     {Object.values(role).map((name, index) => (
    //       <li key={index}>{name}</li>
    //     ))}
    //   </ul>
    // </div>

    <div>
        <h1>===Stranger Things Characters===</h1>
        <h4>Character_Name = {role.Character_Name0}</h4>
        <h4>Character_Name = {role.Character_Name1}</h4>
        <h4>Character_Name = {role.Character_Name2}</h4>
        <h4>Character_Name = {role.Character_Name3}</h4>
        <h4>Character_Name = {role.Character_Name4}</h4>
        <h4>Character_Name = {role.Character_Name5}</h4>
        <h4>Character_Name = {role.Character_Name6}</h4>
        <h4>Character_Name = {role.Character_Name7}</h4>
        <h4>Character_Name = {role.Character_Name8}</h4>
        <h4>Character_Name = {role.Character_Name9}</h4>
        <h4>Character_Name = {role.Character_Name10}</h4>
    </div>
  )
}

export default Strangerthings
