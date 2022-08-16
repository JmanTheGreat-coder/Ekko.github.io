import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {BsCart3} from "react-icons/bs";
import {BsBookmarkHeart} from "react-icons/bs";
import {BsFileEarmarkPerson} from "react-icons/bs";

import './Header.css'



function Header({ size, sizeWish }) {
  return (
    <nav class="navbar header navbar-expand-lg navbar-light ">
  <div class="container">
    <li class="nav-item">
      <Link  to='/'><a class="navbar-brand" href="#">Ekko</a></Link>
      
    </li>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
          
        </li>
        <li class="nav-item">
          <Link to='/shop'><a class="nav-link" href="#">Shop</a></Link>
          
        </li>
        <li class="nav-item">
          <Link  to='/contact'><a class="nav-link" href="#">Contact US</a></Link>
          
        </li>

      </ul>
    </div>
      <div class='row'>

          
            <a class="nav-link" href="#">
              <div class="dropdown">
                <BsFileEarmarkPerson size='2rem'  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <Link to='/login'>
                    <li>
                      <a class="dropdown-item" href="#">Login</a>
                    </li>
                  </Link>

                  <Link to='/login'>
                    <li>
                      <a class="dropdown-item" href="#">Register</a>
                    </li>
                  </Link>
                  
                  <Link  to='/account'>
                    <li>
                      <a class="dropdown-item" href="#">My Account</a>
                    </li>
                  </Link>
                  
                </ul>
              </div>
              
            </a>
          

          
          <Link  to='/cart'>
            <a class="nav-link" href="#">
              <BsCart3 size='2rem'/>
              <span>{size}</span>
            </a>
          </Link>
          <Link  to='/wish'>
            <a class="nav-link" href="#">
              <BsBookmarkHeart size='2rem'/>
              <span>{sizeWish}</span>
            </a>
          </Link>

        
        
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
  </div>

</nav>
  )
    
}

export default Header
