import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Electronic from "./components/electronics/Electronic";
import Jewelery from "./components/jewelery/Jewelery";
import MensC from "./components/mensC/MensC";
import WomensC from "./components/womensC/WomensC";
import ProductDetails from "./components/productDetails/ProductDetails";
import PageNotFound from "./components/pagenotfound/Pagenotfound";
import{Route,Routes}from "react-router-dom";
   function App() {
    return (
           <div>
        <Navbar/>
        <Routes>
        <Route path={"/"}element={<Home/>}/>
      <Route path={"/electronics"}element={<Electronic/>}/>
      <Route path={"/jewelery"}element={<Jewelery/>}/>
      <Route path={"/mensC"}element={<MensC/>}/>
      <Route path={"/womensC"}element={<WomensC/>}/>
      <Route path={"/productDetails/:id"}element={<ProductDetails/>}/>
      <Route path={"*"}element={<PageNotFound/>}/>
        </Routes>           
        </div>
  );
}
export default App;
