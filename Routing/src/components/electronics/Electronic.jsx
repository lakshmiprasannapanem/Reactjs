import"./Electronic.css";
import{useState,useEffect}from "react"
import Electronics from "./Electronics";
import { electronicsService } from "../../services/electronic/electronicService";
// import React from "react";
function Electronic(){
  let[electronicProducts,setElectronicProduct]=useState([]);
  useEffect(()=>{
    getElectronicData();
  },[]);

    const getElectronicData=()=>{
       electronicsService()
       .then((res)=>{
        console.log(res.data);
        setElectronicProduct(res.data)
        })
       .catch((error)=>{
        console.log(error)
        alert("something went wrong to get electronic data");
        });
        
     };
    return(
        <div className="electronicContainer">
            <h2>Electronics Component </h2>
            <div className="electronicBgImage">

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero incidunt corporis perferendis accusamus, praesentium reprehenderit neque ipsam autem harum, explicabo sunt eaque delectus odio quo illum. Quaerat, consectetur nihil!
            Molestiae sint inventore provident nemo consectetur facere laudantium, quis ipsa? At quisquam impedit rerum vitae sit, nisi optio, quam quia perferendis fuga distinctio doloribus corporis excepturi odio provident velit error!</p>

      {electronicProducts && electronicProducts.length > 0 ?(
        <div className="d-flex flex-wrap justify-content-evenly gap-3">
         {
            electronicProducts.map(function(product){
                return <Electronics product={product}/>;
            })
         }
        </div>
        ):(
        <h2 style={{color:"red",textAlign:"center",marginTop:"50px"}}>No Electronics Data</h2>
      )}
        </div>
    );
}
export default Electronic;