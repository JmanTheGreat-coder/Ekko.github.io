import React from "react";
import list from "../data";
import { BsCart3 } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";

function Info({ item, handleClick, handleClick2 }) {
  const { title, stars, price, img, category,consoles  } = item;

  return (
    <div class='row'>
          <div class="col-lg-6 col-md-6">
      <div class="card border-0">
        <div className="card-img-top text-center">
          <img src={img} alt={title} className="photo w-100" />
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6">
      <div class="card h-100 border-0">
        <div className="card-body">
          <div className="card-title ">
            <h2>{title}</h2>
            <BsCart3 size="1.5rem" onClick={() => handleClick(item)} />
            <BsBookmarkHeart size="1.5rem" onClick={() => handleClick2(item)} />

            <p class="card-text text-center">{stars}</p>
            <p class="card-text text-center">{price}</p>
            <h4>category:{category}</h4>
            <h4>consoles:{consoles}</h4>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Info;
