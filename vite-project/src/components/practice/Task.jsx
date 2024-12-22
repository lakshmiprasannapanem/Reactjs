 import { useState } from "react";
 import "./Task.css";

import TabelComb from "./tabelComb/TabelComb";
 function Task(){
        let [task,Settask]=useState({
            name:"",
            password:"",
            phonenumber:"",
            email:""
        });
        let[ userList,setUserList]=useState([]);
    const getTask=()=>{
  setUserList([...userList,task]);
  Settask({
    name:"",
    password:"",
    phonenumber:"",
    email:""
  });
    };
    const getTaskName=(event)=>{
   Settask({
    ...task,
    name:event.target.value,
   })
    }
    const getTaskPassword=(eve)=>{
Settask({
    ...task,
    password:eve.target.value,
})
    }
    const getTaskEmail=(e)=>{
Settask({
    ...task,
    email:e.target.value,
})
    }
    const getTaskPhonenumber=(ev)=>{
     Settask({
        ...task,
        phonenumber:ev.target.value,
     })
    }
    return(
        <div className="containerTask" >
            
            <h2>Welcome To React Js</h2>
            
            <div>
               <input 
               value={task.name}
               type="text"
                placeholder="username" onChange={getTaskName}/>
             </div> 
            <div>
            <input type="password" 
            value={task.password}
            placeholder="password" onChange={getTaskPassword}/>
             </div>
             <div>
             <input type="email" 
             value={task.email}
             placeholder="email" onChange={getTaskEmail}/>
             </div>
             <div>
             <input type="phn"
             value={task.phonenumber}
             placeholder="phone number" onChange={getTaskPhonenumber}/>
             </div>
             <div>
            <button onClick={getTask}>Register</button>
        </div>
        <div>
        <TabelComb userList={userList}/>
        </div>
        </div>
    );
 }
 export default Task;