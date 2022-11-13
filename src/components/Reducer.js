import React , {useReducer, useState} from 'react'

// Using useState function
// function Reducer() {
//     const[count , setCount] = useState(0);
//     const[output , setOutput]=useState("Even");

//     const Reaction = () =>
//     {
//         setCount(count+1);
//         if(count % 2 == 0)
//         {
//             setOutput("Odd")
//         }
//         else
//         {
//             setOutput("Even")
//         }
//     }
//   return (
//     <div className="text-center mt-4" style={{backgroundColor : "green"}}>
//         <div style={{fontSize : "100px" , color : "white"}}>{count}</div>
//         <button onClick={Reaction}>
//            <div className="bg-dark text-light">ClickHere</div>
//         </button>
//         <p style={{fontSize : "80px" ,color: "blue"}}>{output}</p>
//     </div>
//   )
// }

// using UseReducer Function

function Reducer()
{
    const reducer = (state,action) =>
    {
        switch(action.type)
        {
            case "INCREMENT":
                return{count : state.count+1 , showText: state.showText};
            case "CHANGE":
                return{count : state.count , showText : !state.showText};
            default:
                return state;
        };
    };
    const[state,dispatch] = useReducer(reducer , {count : 0, showText : true})
    function Reaction()
    {
        dispatch({type : "INCREMENT"});
        dispatch({type : "CHANGE"});
    }
    return(
        <div className="text-center mt-4" style={{backgroundColor : "green"}}>
            <div style={{fontSize : "100px" , color : "white"}}> {state.count}</div>
           
            <button onClick={Reaction}>
            <div className="bg-dark text-light">ClickHere</div>
            </button>
            {(state.showText)? <p style={{fontSize : "80px" ,color: "blue"}}>Even</p> : <p style={{fontSize : "80px" ,color: "blue"}}>Odd</p>}
        </div>
    )
}
export default Reducer