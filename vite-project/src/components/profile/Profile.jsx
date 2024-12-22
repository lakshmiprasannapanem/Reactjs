 
 import "./Profile.css";
 import { useState } from "react";

 function Profile(){
   let Name =useState("Samantha");
  let [gender,setGender]=useState("female")
  let [image,setImage]=useState("")
  let[email,setEmail]=useState("")
  let[theme,setTheme]=useState({bgColor:"white",textColor:"black"})
   const updateDataToFemale=()=>{
    Name[1]("Samantha");
    setGender("female")
    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P4Av_hr6Qh_6T7V4qWKK_vhFd1IbgCR7ug&s")
    setEmail("samantharuthupranhu@gmail.com")
   };
   const updateDataToMale=()=>{
    Name[1]("RamCharan");
    setGender("male")
    setEmail("ramcharan143@gmail.com")
    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLiV_wIheO-2S2w50djvYfeasuOmOcNAY_A&s")
   };
   const changeTheme=()=>{
    setTheme({bgColor:"black",textColor:"white"})
   }
    return(
        <div className="profileCont">
            <div className="left">
                <img src={image}
                width={"100%"}height={"100%"}/>
                </div>
            <div className="right" style={{backgroundColor:theme.bgColor,color:theme.textColor}}>
                <dl>
                    <dt><b>NAME</b></dt>
                    <dd>{Name[0]}</dd>
                    <dt>
                        <b> GENDER</b>
                    </dt>
                    <dd>{gender}</dd>
                    <dt>
                        <b>EMAIL ID</b>
                    </dt>
                    <dd>{email}</dd>
                    <dt>
                        <b>DESCRIPTION</b>
                    </dt>
                    <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cupiditate exercitationem molestiae iusto consectetur! Mollitia placeat dicta amet, ut architecto, magni est nobis, eligendi quo recusandae excepturi eum dolores dignissimos?
                    Molestias aspernadolor ullam impedit cum illum nobis temporibus excepturi corrupti dolorem totam! Recusandae.
                    Eaque facilis pariatur fugiat? </dd>
                </dl>
            
            <div className="genderContainer">
                <div>
                <input type="radio" name="gender" onChange={updateDataToFemale}/>
                <label>Female</label>
            </div>
            <div>
                <input type="radio" name="gender"onClick={updateDataToMale}/>
                <label>Male</label>
            </div>
        </div>
        <div>
            <input type="Checkbox"  onChange={changeTheme}/>
            <label>Check to Switch Darkmode</label>
        </div>
        </div>
        </div>
    )
 }
 export default Profile;