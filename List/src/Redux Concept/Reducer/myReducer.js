
const myReducer=(state="Dummy Data",action)=>{
  if (action.type==="Name"){
    state=action.data;
  }
    
    return state;
 }
 export default myReducer;