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
    <div>
      {mealData.map((data)=><div key = {data.idMeal}>
        <div>
          <img src={data.strMealThumb} alt="" />
        </div>
        <h3>{data.strMeal}</h3>
      </div>)}
    </div>
  )
}
export default Meal
