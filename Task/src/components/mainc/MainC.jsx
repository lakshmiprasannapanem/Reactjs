import React from "react";
import "./MainC.css";
function MainC(){
    return(
        <div  className="win">
         <div className="h3-win" >
      <i class="bi bi-award-fill "></i>
      <h1 class=" col-1">22 AwardsWinning</h1>
      </div>
      <div className="h3-win1">
      <i class="bi bi-bag-heart"></i>
      <h1 class="col-1">145 FinishedProjects</h1>
      </div>
      <div className="h3-win2">
        <i class="bi bi-car-front-fill"></i>
        <h1 class="col-1">349 ProductSold</h1>
      </div>
      <div className="h3-win3">
      <i class="bi bi-twitter"></i>
      <h1 class="col-1">2456 TwitterFans</h1>
      </div>
        </div>
    )
}
export default MainC;