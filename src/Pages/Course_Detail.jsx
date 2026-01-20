import React from 'react'
import { useParams , Link, useLocation} from 'react-router-dom'

const Course_Detail = () => {
  // console.log(useParams());
  // console.log(useLocation());
   const arr = [
        {id: 'MEARN001',cousre_name: 'Mern_Stack',price: 10000 ,duration:'5 months'},
        {id:'JAVA002',cousre_name:'Java_Full_Stack', price:30000, duration:'5 months'},
        {id:'PYTHON003',cousre_name:'Python_Full_Stack',price: 40000 ,duration:'5 months'},
        {id:'REACT004',cousre_name:'Reacts_JS',price: 40000 ,duration:'5 months'},

    ];
  const{id} = useParams()
  const location = useLocation();

  const course_detail = arr.filter((data) =>data.id == id);
  // console.log(course_detail)
  return (
    <>
    <div>
      <h1>Course_id = {id} </h1>
      <h2>Course_name = {course_detail[0].cousre_name}</h2>

      {location.pathname != "/courses/PYTHON003" && (
      <>
        <h2>Course_duration = {course_detail[0].duration}</h2>
        <h2>Course_Price = {course_detail[0].price}</h2>
      </>
    )}

      

    </div>
    <button> <Link to={'/courses'} 
    style={{
          textDecoration: "none",
          color: "black"}}>
    All Courses</Link></button>
    </>
  )
} ;

export default Course_Detail
