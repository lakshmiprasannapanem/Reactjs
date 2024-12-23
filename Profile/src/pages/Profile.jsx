import React from "react";
import { Link ,Outlet} from "react-router-dom";
function Profile(){
    return(
        <div className="container mt-5" style={{height:"400px",boxShadow:"0 0 10px greenyellow"}}>
            <div className="row h-100">
                <div className="col-4 bg-dark">
            <div className="container fs-5 h-100 d-flex flex-column justify-content-evenly align-items-center">
                <div className="row">
                    <div className="col-12">
                        <Link to="personaldetails" className="text-white text-decoration-none">Personal Details</Link>
                    </div>
                </div>

                <div className="row">
                <div className="col-12">
                        <Link to="professionaldetails" className="text-white text-decoration-none">Professional Details</Link>
                    </div>
                </div>
                <div className="row">
                <div className="col-12">
                        <Link to="educationaldetails" className="text-white text-decoration-none">Educational Details</Link>
                    </div>
                </div>
            </div>
                </div>
                <div className="col-8">
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}
export default Profile;