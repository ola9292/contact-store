import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="nav-box">
            <Link to="/" style={{ textDecoration: 'none', color:'#fff' }}><h1>Contact Keeper</h1></Link>
           <ul className="nav-links">
           <Link to="/create" style={{ textDecoration: 'none', color:'#fff' }}>Create</Link>
            <li>Edit</li>
           </ul>
        </div>
    )
}