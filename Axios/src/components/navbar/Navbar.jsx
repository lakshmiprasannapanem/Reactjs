import "./Navbar.css";
function Navbar(){
    return(
        <div className="navbar">
     <div className="title">
        <h1>Mymart-App</h1>
     </div>
     <div className="a">
        <a href="/home/Home.jsx">Home</a>
        <a href="">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Mens</a>
        <a href="">Womens</a>
     </div>
     <div className="nextlinks">
     <a href="">Profile</a>
     <a href="">Card</a>
     <a href="">Wishlist</a>
     <a href=""><button>Logout</button></a>
     
     </div>
        </div>
    );
}
export default Navbar;