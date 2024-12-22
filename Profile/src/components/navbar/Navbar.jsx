import "./Navbar.css";
import {Link} from 'react-router-dom';
import React from "react";
function Navbar(){
    return(
        <div className="navbar">
     <div className="title">
        <h1>Amazon</h1>
     </div>
     <div className="a">
        <Link to="/">Home </Link>
        <Link to="/electronics">Electronics </Link>
        <Link to="/jewelery">Jewelery </Link>
        <Link to="/mensC">Mens </Link>
        <Link to="/womensC">Womens </Link>
     </div>
     <div className="nextlinks">
     <Link to="/profile">
      <i class="bi bi-person-circle"></i>
       </Link>
     <Link to="">
       <i class="bi bi-bag-heart-fill"></i>
      </Link>
     <Link to="">
      <i class="bi bi-heart-fill"></i>
      </Link>
     <button className="btn btn-outline-danger text-white">Logout</button>
          </div>
        </div>
    );
}
export default Navbar;