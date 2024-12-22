import React from "react";
import D from "./D";
function C(Props){
    return(
        <div>
            <h2>C Component</h2>
            <p>A Data:{Props.data}</p>
            <hr/>
            <D info={Props.data}/>
        </div>
    )
}
export default C;