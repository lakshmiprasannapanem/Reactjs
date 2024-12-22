import axios from "axios";
export function womensCService(){
 return axios.get("http://localhost:3000/categories_womensclothing");
 
}
