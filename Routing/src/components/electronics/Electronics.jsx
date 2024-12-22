import React from "react";
import { Link } from "react-router-dom";
function Electronics({product}){
    const{image,title,price,rating,id}=product;
    return(
        <div className="card w-25 my-3">
        <div className="card-header">
            <img src={image}width="100%" height={200}/>
        </div>
        <div className="card-body">
            <h6>{title}</h6>
            <p>${price}</p>
            <p>{rating.rate}</p>
           
            <Link to={`/productDetails/${id}`}>
            <button className="btn btn-primary mx-1">Products details</button>
            </Link>
            <button className="btn btn-warning ">Add to Card</button>
        </div>
        {/* <div className="card-footer">
            <button className="btn btn-primary mx-1">Products details</button>
            <button className="btn btn-warning ">Add to Card</button>
        </div> */}
     </div>
    );
}
export default Electronics;