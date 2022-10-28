import React, { useEffect, useState } from "react";
import axios from "axios";
function App(){
  const [data,setData]=useState([])
  useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>setData(response.data))},[]);
  return(
    <div>
      <h1>Data fetching</h1>
      <ol>
        {
          data.map((item)=><li key={item}>{item.title}</li>)
        }
      </ol>
    </div>

  );

  

    
  
  


}
export default App;