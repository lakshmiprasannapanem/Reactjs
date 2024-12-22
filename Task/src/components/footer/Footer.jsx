
import React from "react";

function Footer(){
    return <div style={{backgroundColor:"black",color:"white",padding:"30px",margin:"20px"}} className="d-flex justify-content-around">
        <div style={{width:"900px"}}>
            <h3>ABOUT FLEX BUSINESS PRO</h3>
            <p class="col-12 col-sm-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium assumenda, alias molestias distinctio, quae fugit possimus maiores culpa, veritatis voluptatem libero rerum ut harum. Blanditiis ea nisi voluptate animi delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quasi, doloremque voluptatibus minima suscipit doloribus exercitationem magni corporis. Recusandae quod eos sunt voluptate quaerat nihil, aut porro. Excepturi, perspiciatis.</p>
        </div>
        <div style={{width:"500px"}}>
            <h3>RECENT POSTS</h3>
            <div style={{padding:"10px"}}>
                <h5 class="fw-medium">Fly To London</h5>
                <h6 class="fw-light">september 18,2018</h6>
            </div>
            <div style={{padding:"10px",justifyContent:"space-around"}}>
                <h5 class="fw-medium">Stair communication</h5>
                <h6 class="fw-light">september 18,2018</h6>
            </div>    
            <div style={{padding:"10px"}}>
                <h5 class="fw-medium">Do you want to be a robot</h5>
                <h6 class="fw-light">september 18,2018</h6>
            </div>
        </div>
        <div style={{width:"550px",textAlign:"center"}}>
            <h3>GALLERIES</h3>
            <div className="d-flex justify-content-around flex-wrap">
                <img  style={{width:"90px",padding:"3px"}} src="https://i.pinimg.com/736x/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxX1AymmqXbLYimY_Da7hFcUw8kkcYrh5_qw&s" style={{width:"90px",padding:"3px"}} />
                <img src="https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg" style={{width:"90px",padding:"3px"}} />
                <img src="https://static.vecteezy.com/system/resources/previews/033/935/623/non_2x/a-tree-in-the-ocean-at-sunset-ai-generated-free-photo.jpg" style={{width:"90px",padding:"3px"}} />
                <img src="https://w0.peakpx.com/wallpaper/853/969/HD-wallpaper-samantha-actress-films-samantha-ruth-prabhu-telugu-movie-samantha-akkineni-telugu-actress-samanthaakkineni-bollywood-actress.jpg" style={{width:"90px",padding:"3px"}} />
                <img src="https://lh6.googleusercontent.com/proxy/vuxyus0fYbILQcp7YGZetOZECaBMPJBE9IY4OEBmw1y47E5ULJpRjCYl9P53o-1G2OrxQg8ftdrJIEWrY69X6tdlFEOo_BbPW-TOZYtL9FAzwgz6uxDje-PWwdfMNgBrU3aA1C26zRKlI4o" style={{width:"90px",padding:"3px"}} />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s" style={{width:"90px",padding:"3px"}} />
                <img src="https://plus.unsplash.com/premium_photo-1688502221383-856083153ef6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZSUyMHNhZHxlbnwwfHwwfHx8MA%3D%3D" style={{width:"100px",padding:"4px"}} /> */}
             {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnSbgZtWo4mXI72uosyay7df-Ffdp3jwt1g&s"style={{width:"90px",padding:"3px"}} /> */}
            </div>
        </div>
    </div>
}

export default Footer;
