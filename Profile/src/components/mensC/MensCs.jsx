import React from "react";
function MensCs({product}){
    const{image,title,price,rating}=product
    return(
        <div className="card w-25 ">
        <div className="card-header">
            <img src={image}width="100%" height={200}/>
        </div>
        <div className="card-body">
            <h6>{title}</h6>
            <p>${price}</p>
            <p>{rating.rate}</p>
           
            <button className="btn btn-primary mx-1">Products details</button>
            <button className="btn btn-warning ">Add to Card</button>
        </div>
        {/* <div className="card-footer">
            <button className="btn btn-primary mx-1">Products details</button>
            <button className="btn btn-warning ">Add to Card</button>
        </div> */}
     </div>
    )
}
export default MensCs;