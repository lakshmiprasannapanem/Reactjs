import React from "react"
import "./Catagoryitem.css"
function Catagoryitem(props){
    return(
        <div className="catagory">
            <img src={props.image}width={65}height={65}/>
            <h4>{props.title}</h4>
        </div>
    );
}
export default Catagoryitem;