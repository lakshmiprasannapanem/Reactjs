import {useReducer} from "react";
const reducerFn=()=>{
    return;
}
function UseReducerComp(){
    let[state,dispatch]=useReducer(reducerFn,999);
    return(
        <div>
  <h2>useReducer()concept:{state}</h2>
        </div>
    )
}
export default UseReducerComp;