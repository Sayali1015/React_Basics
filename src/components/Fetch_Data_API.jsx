import React, { useEffect , useState } from 'react'

const Fetch_Data_API = () => {
const [apiData, setApiData] = useState([])
    useEffect(() => {

        const FetchDataFromAPI = async ()=>{
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            setApiData(data);
            console.log("My Data = ", data);
        }
        FetchDataFromAPI();

    }, [])
    
  return (
    <div >
      {apiData.map((data)=><div key={data.id} style={{backgroundColor : 'hotpink', color:'black', margin: '10px', border: '2px solid yellow', borderRadius: "5px", textAlign: 'center'}}>
        <h3>{data.title}</h3>
      </div>)}
    </div>
  )
}

export default Fetch_Data_API
