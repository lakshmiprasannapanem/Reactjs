import {useState} from "react";
import mycontext from "./context";
import B from "./B";
function A(){
let [data,setData]=useState({
        name:"Prasanna",
        city:"Hyderabad"
    });
    return(  
     <div>
            <h2>A Component</h2>
            <button onClick={()=>{
                setData({name:"Jessy",city:"Tiruvuru"});
            }}>Update User</button>
            <hr/>
            <mycontext.Provider value={data}>
                <B/>
            </mycontext.Provider>
    </div>
    );
}
export default A;