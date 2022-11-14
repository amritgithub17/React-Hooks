import axios from 'axios';
import React , {useEffect}  from 'react';
import {useState} from 'react';

function Effect() {

 const[count,setCount] = useState(0);
 const[data,setData] = useState("")

 const Reaction = () =>
 {
    setCount(count+1)
 }
 useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        setData(response.data[0].email)
        console.log("API WAS CALLED");
    });
 },[count]);
  return (
    <div style={{textAlign : "center" , backgroundColor : "aqua"}}>
        <h1>{data}</h1>
        <div className="mt-4">
            <h1>{count}</h1>
            <br />
            <button onClick={Reaction}>
                ClickHere
            </button>
        </div>
    </div>
  )
}

export default Effect 