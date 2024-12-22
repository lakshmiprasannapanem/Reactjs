import {useState} from "react";
import {getUsers}from "../service/UsersService";
import User from "../user/User";
import "./Users.css";
function Users(){
     let[users,setUsers]=useState([]);
     const sendRequest=()=>{
  var usersPromiseObject =getUsers();
  usersPromiseObject.then((users)=>{
    console.log(users.data.results);
    setUsers(users.data.results);
  })
  .catch((error)=>{
    alert("Failed to get Users Data")
  })
    };
    return(
        <div className="UsersContainer">
            <h2>Users Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio similique ipsa consequatur consectetur id veniam perspiciatis dicta sunt? Alias explicabo repellendus rem iusto dignissimos, repellat eaque sit corporis consequatur.
            Quisquam distinctio similique ipsa consequatur consectetur id veniam perspiciatis dicta sunt? Alias explicabo repellendus rem iusto dignissimos, repellat eaque sit corporis consequaturQuisquam distinctio similique ipsa consequatur consectetur id veniam perspiciatis dicta sunt? Alias explicabo repellendus rem iusto dignissimos, repellat eaque sit corporis consequatur
            </p>
            <button onClick={sendRequest}>Get User</button>
            <div className="userContainer">
                {
                    users.map((element,index)=>{
                    return <User user={element}/>;
                    })
                }
            </div>
        </div>
    );
   }
   export  default  Users;