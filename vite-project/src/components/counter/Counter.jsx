 import React from "react";
 import "./Counter.css";
import { useState } from "react";
function Counter(){
    let[state,setState]=useState(0);
    function fnCount(){
        // setState(state+1);
        setState(function(currentState){
            return currentState-1;
        })
    }
        function fnDeCount(){
            setState(function(currentState){
                return currentState-2;
            })
        // setState(state-4);
        // setState(state-3);
    }
    
   return(
       <div className="counter">
           <h2>Count value is:{state}</h2><br/>
           <button onClick={fnCount}>InCount</button>
           <button onClick={fnDeCount}>InCount</button>
       </div>
   );
}
export default Counter;3
