import { useState } from "react";
function Image(){
    let[image,setImage]=useState(
        "https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png"
    );
     const changeToNode=()=>{
        setImage(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpbMz5gtoD0h1BnkBSqoma_REKgU69ajboA&s"
        )
    }
            const changeReact=()=>{
        setImage(
            "https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png"
        )
     }
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2>Reactjs</h2><br/>
            <img 
            src={image}
            width={500}
            height={300}
            />
            <br/>
            <br/>
            <button onClick={changeReact}>React js</button>
            <button onClick={changeToNode}>Node js</button>
        </div>
    );
}
export default Image;