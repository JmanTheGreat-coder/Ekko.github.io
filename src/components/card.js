import React from "react";
import { Link } from "react-router-dom";
import {BsCart3} from "react-icons/bs";
import {BsBookmarkHeart} from "react-icons/bs";


const Cards = ({ item, handleClick, handleClick2 }) => {
  const { title, stars, price, img ,id} = item;

  return (

  
    <div class="card h-100 border-0">
      <div className="card-img-top text-center">
          <img src={img} alt={title} className="photo w-100" />
      </div>
      <div className="card-body">
          <div className="card-title ">
            <Link to={`/products/${id}`}>
              <h6>
                <p>{title}</p>
                <p>{wasgud}</p>
              </h6>  
            </Link> 
            <BsCart3 size='1.5rem' onClick={() => handleClick(item)}/>
            <BsBookmarkHeart size='1.5rem' onClick={() => handleClick2(item)}/>

            <p class="card-text text-center">{stars}</p>
            <p class="card-text text-center">{price}</p>
          </div>
      </div>
    </div>
  


  );
};

export default Cards;

// <button onClick={() => handleClick(item)}>Add to Cart</button>
