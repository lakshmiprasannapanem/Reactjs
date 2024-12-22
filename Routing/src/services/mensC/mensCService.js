import axios from "axios";
export function mensCService(){
 return axios.get("http://localhost:3000/categories_mensclothing");
 
}
