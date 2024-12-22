import "./Navbar.css";
function Navbar(){
    return(
        <div className="navbar">
     <div className="title">
        <h1>Mymart-App</h1>
     </div>
     <div className="a">
        <a href="/home/Home.jsx"><i class="bi bi-house-heart-fill"></i>Home</a>
        <a href="">Products</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
     </div>
     <div className="nextlinks">
     <a href="">Profile</a>
     <a href="">Card</a>
     <a href=""><i class="bi bi-link"></i> Link</a>
     
     </div>
        </div>
    );
}
export default Navbar;