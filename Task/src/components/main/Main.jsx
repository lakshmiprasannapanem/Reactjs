import React from "react";
import "./Main.css";
function Main(){
    return(
        <div className="feature">
 <h1 class="text-center">Our Features</h1>

 <div className="feature-item">
 <i class="bi bi-laptop-fill"></i>
    <h4 >Fully Responsive</h4>
    <i className="feature-icon"></i>
    <p class=" col-12 col-sm-11">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    <a style={{color:"blue"}}>Read More</a>
 </div>

 <div className="feature-item1">
 <i class="bi bi-person-circle"></i>
    <h4>Trusted Author</h4>
    <p class="col-12 col-sm-11">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <a style={{color:"blue"}}>Read More</a>
 </div>

 <div className="feature-item">
 <i class="bi bi-recycle"></i>
    <h4>Reusable Elements</h4>
    <p class="col-12 col-sm-11">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <a style={{color:"blue"}}>Read More</a>
    
 </div>
        </div>
    )
}
export default Main;