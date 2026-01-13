import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const arr = [
        {id: 'MEARN001',cousre_name: 'Mern_Stack',price: 10000 ,duration:'5 months'},
        {id:'JAVA002',cousre_name:'Java_Full_Stack', price:30000, duration:'5 months'},
        {id:'PYTHON003',cousre_name:'Python_Full_Stack',price: 40000 ,duration:'5 months'},
        {id:'REACT004',cousre_name:'Reacts_JS',price: 40000 ,duration:'5 months'},

    ]
  return (
    <div>
      <ul>
        {arr.map((data)=><div key = {data.id}>
            <li><Link to={`/courses/${data.id}`}>{data.cousre_name}</Link>{" "}</li>

        </div>)}
      </ul>
    </div>
  )
}

export default Product
