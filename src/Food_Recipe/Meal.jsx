import React, { useEffect, useState } from 'react'

const Meal = () => {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () =>{
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);

      const data = await api.json();

      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromAPI()
  }, [])
  
  return (
    <div style={{display:'flex', justifyContent: 'center', alignContent:'center', flexWrap:'wrapg'}}>
      {mealData.map((data)=><div key = {data.idMeal} style={{textAlign: 'center'}}>
        <div>
          <img src={data.strMealThumb} alt="" style={{width:'220px', borderRadius:'10px', border: '2px solid blue'}} />
        </div>
        <h5>{data.strMeal}</h5>
      </div>)}
    </div>
  )
}
export default Meal
