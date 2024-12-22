// import React from "react";
import { useState,useEffect } from "react";
import Jewelerys from"./Jewelerys";
import { jeweleryService } from "../../services/jewelerys/jeweleryService";
function Jewelery(){
    let[jeweleryProducts,setJeweleryProducts]=useState([]);
    useEffect(()=>{
        getJeweleryData();
    },[])
    const getJeweleryData=()=>{
          jeweleryService()
        .then((res)=>{
            console.log(res.data);
            setJeweleryProducts(res.data)
            })
           .catch((error)=>{
            console.log(error)
            alert("something went wrong to get electronic data");
            });
    };
    return(
        <div className="jeweleryContainer">
  <h2 className="text-secondary">Jewelery Component</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis facere, enim nulla quaerat maiores in deserunt similique porro? Sunt odit ad architecto nisi dolorem alias voluptatum dolore vero non, accusamus, culpa enim iure consequuntur minima praesentium modi odio! Voluptate sequi laboriosam expedita. Quas, vitae dolore molestiae, unde voluptatibus eaque iure recusandae debitis totam impedit quam minus? Consectetur, doloremque facere non nulla eveniet blanditiis repellendus similique maiores sit omnis eos ducimus repellat animi reiciendis molestias ipsa tempore. Nisi optio perspiciatis voluptatem amet maxime eveniet necessitatibus ullam earum deserunt. Distinctio reiciendis a, laborum fuga vero veritatis recusandae! Minima eos nisi blanditiis molestias saepe, perferendis culpa nihil? Eos velit ad aperiam illum, sapiente ipsum, placeat alias maxime autem sed animi itaque officiis quasi aliquam ducimus numquam similique vel! Id quisquam quidem laudantium temporibus tempora aut, neque amet, repellat sequi illum quos saepe aperiam delectus. Neque libero eveniet velit eos ea ullam, modi asperiores iste nesciunt pariatur dolor voluptate voluptatem blanditiis accusamus obcaecati! Vel nisi dolorum, adipisci sequi tempore incidunt dolorem in, maxime debitis ea quibusdam facilis quo veritatis error. Assumenda natus et sed, ullam enim molestias nam in quaerat fugit. Quia, asperiores! Nihil perspiciatis nemo cumque nisi odit. Voluptatem sint ex vero!</p>
                     {jeweleryProducts && jeweleryProducts.length > 0 ?(
        <div className="d-flex flex-wrap justify-content-evenly gap-2">
         {
            jeweleryProducts.map(function(product){
                return <Jewelerys product={product}/>;
            })
         }
        </div>
        ):(
        <h2 style={{color:"red",textAlign:"center",marginTop:"50px"}}>No Jewelery Data</h2>
      )}
        </div>
    )
}
export default Jewelery;