import React from "react";
import { useSelector } from "react-redux";
function Display(){
    let storedata=useSelector((store)=>{
        return store;
    })
    
    return(
        <div>
    

    <p>Input Data:{storedata}</p>
        </div>
    
    )
}
export default Display;