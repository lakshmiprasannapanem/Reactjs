import { useState } from "react";
function State(){
let[state,setState]=useState();
const getInputData=()=>{

}
const Statevalue=()=>{
    alert("State")
}
        return(
        <div style={{marginTop:"50px"}}>
            <h2>Update State With Input Data</h2>
            <input onChange={(event)=>{
               setState(event.target.value);
            }}/>
            <button onClick={Statevalue}>Submit</button>
        </div>
    );
}
export default State;