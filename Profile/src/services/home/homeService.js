import axios from "axios";
export function homeService(){
 return axios.get("http://localhost:3000/products");
 
}
