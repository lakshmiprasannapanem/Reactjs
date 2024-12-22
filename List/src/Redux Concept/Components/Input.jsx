import {useState} from "react";
import actionCreator from "../Action/action";
import { useDispatch } from "react-redux";
import { useReducer } from "react";


const reducer=(state,action)=>{
    var newState;
    if (action.type==="add"){
        newState=state+action.value;
    }else if(action.type==="sub"){
        newState=state-action.value;
    }else if(action.type==="mul"){
        newState=state*action.value;
    }
    return newState;
};
function Input(){
    let[task,dispatch]=useReducer
    let[state,setState]=useState("");
    
    
    const storeDataInAction=()=>{
      var actionObj=actionCreator(state);
      dispatch(actionObj);
    }

    return(
        <div>
            <h2>To-Do-List</h2>
            <input type="text" onChange={(e)=>{setState(e.target.value);}}placeholder="enter-text"/>
            <button onClick={()=>{dispatch({type:"text"})}}> Submit</button>
            <button onClick={()=>{dispatch({type:"text",value:"update"})}}>Update</button>
            <button onClick={()=>{dispatch({type:"text",value:"Delete"})}}>Delete</button>
        </div>
    )
}
export default Input;