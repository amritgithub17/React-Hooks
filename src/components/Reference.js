import React , {useRef , useState , useEffect} from 'react'

function Reference() {
    const inputRef = useRef(null);
    const[data,setData] =useState("");
    const Reaction = () =>
    {
        inputRef.current.focus();
        {(inputRef.current.value === "") ? (setData("YOU AHVE NOT ENTERED ANYTHING")) : (setData(inputRef.current.value))}
        // console.log(inputRef.current.value)
        inputRef.current.value = "";
    }

    useEffect(() => {
        setData("AMRIT")
    },[])
  return (
    <div>
        {/* <h1>AMRIT</h1> */}
        <h1>{data}</h1>
        <input placeholder="Enter something" ref={inputRef} />
        <button onClick={Reaction}>Change Name</button>
    </div>
  )
}

export default Reference