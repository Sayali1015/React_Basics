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
    
      <div>
      <h1>Stranger Things Characters</h1>
      <ul>
        {Object.values(role).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Strangerthings
