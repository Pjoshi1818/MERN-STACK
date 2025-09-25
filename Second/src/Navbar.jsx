import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [role , SetRole] = useState("");
  return (
    <div id='pt' style={{display :"flex" , justifyContent : "space-between ", alignItems : "center" ,padding : "20px" , backgroundColor : "lightblue"}}>
        <h1>Logo</h1>
        <div>
            <input type="text" placeholder='Search...' />
        </div>
        {/* <div>
            {role === "ADMIN" ? 
            <ul style={{listStyleType : "none" , display : "flex" , gap :  "10px"}}>
                
                <li>Home</li>
                <li>Dashboard</li>
                <li>All Users</li>
                <li>All Blog</li>
            </ul> : 
            role === "VENDOR" ? 
            <ul style={{listStyleType : "none" , display : "flex" , gap :  "10px"}}>
                
                <li>Home</li>
                <li>Vendor Dashboard</li>
                <li>My Blogs</li>
                <li>My Posts</li>
            </ul> : role === "USER" ? 
            <ul style={{listStyleType : "none" , display : "flex" , gap :  "10px"}}>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul> : ""
            }
        </div> */}

 <ul style={{listStyleType : "none" , display : "flex" , gap :  "10px"}}>
                
                <li> <Link to= "/home ">HOME </Link></li>
                <li> <Link to= "/dashbord ">DASHBORD</Link></li>
                <li> <Link to= "/login">LOGIN </Link></li>
                
            </ul>

    </div>
  )
}

export default Navbar