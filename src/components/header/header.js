import { Link, useNavigate } from "react-router-dom";

import './header.css'
import Cookies from "js-cookie";
import Home from "../home/home";




const Header = ()=>{

    //let navigate=useNavigate();
    // const onClickLogin = ()=>{
        
    //     Cookies.remove('jwt_token');
    //     navigate('')
    
   // }

    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-container navbar-fixed-top">
      <div class="container-fluid">
           <Link to="/" className="navbar-band nav-item">
              <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" width="40" alt="doctor logo" />
              &nbsp; Bayanno Diagnostic Center
           </Link>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item"> 
              <Link class="nav-link" to="/">HOME</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">DEPARTMENTS</a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/Anesthetics">Anesthetics</Link></li>
                <li><Link class="dropdown-item" to="/Cardiology">Cardiology</Link></li>
                <li><Link class="dropdown-item" to="/Gastroenterology">Gastroenterology</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/doctors">DOCTORS</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">ABOUT</Link>
            </li>  
            <li class="nav-item">
              <Link class="nav-link" to="/appointment">APPOINTMENT</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">BLOG</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/auth" target="_blank">LOGIN</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    
    </> 
    )
}

export default Header;