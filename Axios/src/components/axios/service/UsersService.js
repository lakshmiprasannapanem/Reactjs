import axios from "axios";
 export function getUsers (){
var usersPromiseObject= axios.get("https://randomuser.me/api/?results=20")
return usersPromiseObject;
 }
//  usersPromiseObject.then((Users) =>{
//     console.log("then");
//     console.log(Users.data.results);
//  })
//  .catch((error)=>{
//     console.log("catch");
//     console.log(error);
//  });
// }
    