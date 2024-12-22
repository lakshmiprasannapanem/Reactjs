import { useRef } from "react";
function DomRef(){
    let h2Ref=useRef(null);
     let myRef=useRef(null);
    const changestyle=()=>{
        var h2DomElement=h2Ref.current;
        h2DomElement.style.color="green";
        myref.current.style.color="blue";
    };
    return(
        <div>
            <h2 ref={h2Ref}>Dom Manipulation Using useRef()</h2>
            <button ref={myRef} onClick={changestyle}>Change Color</button>
        </div>
    )
}
export default DomRef;