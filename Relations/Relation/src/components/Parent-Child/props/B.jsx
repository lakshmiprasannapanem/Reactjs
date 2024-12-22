import React from "react";
import C from "./C";
function B(Props){
    return(
        <div>
            <h2>B Component</h2>
            <p>A Data:{Props.data}</p>
            <hr/>
            <C data={Props.data2}/>
        </div>
    )
}
export default B;