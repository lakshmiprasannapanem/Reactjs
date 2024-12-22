import {useRef,useState} from "react";
function UseRefC(){
    let myRef=useRef("QT");
    let[state,setState]=useState(0);
    let[city,setCity]=useState("Hyd");
    const display=()=>{
        console.log(state,myRef.current);
    };
    return(
        <div>
            <h2>useRef()hook concept:{state}</h2>
            <p>Value of useRef</p>
            <button onClick={()=>{
                setState(100);
            }}>Update State</button>
            <button onClick={display}>Print Values</button>
            <button onClick={()=>{
                myRef.current="Quality Thought"
            }}>Update Ref</button>
        </div>
    )
}
export default UseRefC;
