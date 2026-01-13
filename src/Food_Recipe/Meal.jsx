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
    <>
    <div className='mx-auto text-center'>
        <button 
        // onClick={()=>setMovieList(movies)} 
        type="button" 
        className="btn btn-outline-primary mx-3"
        >
        Indian</button>

        <button 
        // onClick={()=>filterByCategory("Action")} 
        type="button" 
        className="btn btn-outline-danger mx-3">
        Canadian</button>

        <button 
        // onClick={()=>filterByCategory("Thriller")} 
        type="button" 
        className="btn btn-outline-light mx-3">
        American</button>

        <button 
        // onClick={()=>filterByCategory("Animation")} 
        type="button" 
        className="btn btn-outline-info mx-3">
        Thai</button>

        <button 
        // onClick={()=>filterByCategory("Horror")} 
        type="button" 
        className="btn btn-outline-warning mx-3">
        British</button>

        <button 
        // onClick={()=>filterByCategory("Drama")} 
        type="button" 
        className="btn btn-outline-info mx-3">
        Russian</button>

      </div>

    <div style={{display:'flex', justifyContent: 'center', alignContent:'center', flexWrap:'wrapg'}}>
      {mealData.map((data)=><div key = {data.idMeal} style={{textAlign: 'center'}}>
        <div>
          <img src={data.strMealThumb} alt="" style={{width:'220px', borderRadius:'10px', border: '2px solid blue'}} />
        </div>
        <h5>{data.strMeal}</h5>
      </div>)}
    </div>
      </>
  )
}
export default Meal
