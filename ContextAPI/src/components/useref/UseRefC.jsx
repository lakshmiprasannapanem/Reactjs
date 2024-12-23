import {useRef,useState} from "react";
function  UseRefC(){
    let myRef=useRef("QT");
    let[state,setState]=useState(0);
    var city="Hyd";
    const display=()=>{
        console.log(state,city);
    };
    const updateCity=()=>{
        city="pune";
    };
    return(
        <div>
        <h2>useRef()hook concept:{state}</h2>
        <p>Value of useRef():{myRef.current}</p>
        <button onClick={()=>{
            setState(100);
        }}>Update State</button>
        <button onClick={updateCity}>Update City</button>
        <button onClick={display}>Print Value</button>
        </div>
    );
}
export default UseRefC;