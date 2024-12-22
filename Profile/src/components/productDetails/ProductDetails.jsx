import {useEffect,useState}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails(){
    const[state,setState]=useState({
        id:0,
        title:"",
        rating:{
            rate:0,
            count:0
        },
        category:"",
        price:0,
        image:"",
        description:""
        })
    let{id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res)=>{
            setState(res.data)
        })
        .catch((error)=>{
            alert("Error while fetching the data");
        })
    },[])
    return(
        <div className="container shadow p-3 mt-5">
            <div className="row">
                <div className="col-4">
                    <img src={state.image}width={"100%"}height={300}/>
                </div>
             <div className="col-8">
                <dl>
                    <dt>Product Name</dt>
                    <dd>{state.title}</dd>

                    <dt>Price</dt>
                    <dd>{state.price}</dd>

                    <dt>Category</dt>
                    <dd>{state.category}</dd>

                    <dt>Descripition</dt>
                    <dd>{state.description}</dd>
                    <dt>Rating</dt>
                    <dd>{state.rating.rate}</dd>
                    <button className="btn btn-primary mx-2">Add the Cart</button>
                    <button className="btn btn-secondary mx-2">Back to Electronics</button>
                </dl>
             </div>
            </div>
         </div>
    )
}
export default ProductDetails;