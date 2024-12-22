import { useState } from "react";
function Pic(){
    let [image,setImage]=useState(
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/44fe68e438b997c9.jpeg?q=20"
    );

setInterval(function(){
    Pic()
},120)
const changeToNode1=()=>{
    setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpbMz5gtoD0h1BnkBSqoma_REKgU69ajboA&s"
    )
    setInterval(function(){
        Pic()
    },700)
 }


const changeToNode=()=>{
    setImage(
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
    )
 }
return(
<div style={{height:"100px auto",width:"100px auto",margin:"50px"}}>
<h2>React js</h2><br/>
            <img 
            src={image}
            width={500}
            height={300}
            />
</div>
);
}
export default Pic;