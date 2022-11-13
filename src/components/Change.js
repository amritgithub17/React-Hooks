import React ,{useState} from 'react'

function Change() {
    const[inputValue,setInputValue] = useState("Amrit"); 

    const Reaction = (event) =>
    {
        
        const newValue = event.target.value;
        
        setInputValue(newValue)
    }
    
  return (
    <div className = "mt-5"style ={{textAlign : "center" , backgroundColor  :"red"}}>
        <input placeholder="Enter Something .. " onChange={Reaction} style = {{backgroundColor : "aqua" }}/>
        {inputValue}
    </div>
  )
}

export default Change