import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import Mar from '../images/key mario.png'
import Sek from '../images/key sek.jpg'
import Van from '../images/key van.jpg'
import { Link } from "react-router-dom";


function Carousel() {
  return (


  
<div class="container-fluid ">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={Mar} class="d-block w-100" alt="Slide 1"/>
                <div class="carousel-caption d-md-block">
                    <Link to='/products/4'>
                        <button type="button" class="btn btn-primary">Buy Now</button>
                    </Link>
                    
                    <p>Some demonstrative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={Sek} class="d-block w-100" alt="Slide 2"/>
                <div class="carousel-caption d-md-block">
                <Link to='/products/7'>
                    <button type="button" class="btn btn-primary">Buy Now</button>
                </Link>
                
                    <p>Some demonstrative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={Van} class="d-block w-100" alt="Slide 3"/>
                <div class="carousel-caption d-md-block">
                <Link to='/products/20'>
                    <button type="button" class="btn btn-primary">Buy Now</button>
                </Link>
                
                    <p>Some demonstrative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>

        
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div>
  )
}

export default Carousel