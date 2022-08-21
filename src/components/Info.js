import React from "react";
import list from "../data";
import { BsCart3 } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";

function Info({ item, handleClick, handleClick2 }) {
  const { title, stars, price, img, category, consoles } = item;

  return (
    <div class="row">
      <div class="col-lg-5 col-md-6">
        <div class="card border-0">
          <div className="card-img-top">
            <img src={img} alt={title} className="w-100" />
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-6">
        <div class="card h-100 border-0">
          <div className="card-body">
            <div className="card-title ">
              <h2>{title}</h2>
              <BsCart3 size="1.5rem" onClick={() => handleClick(item)} />
              <BsBookmarkHeart
                size="1.5rem"
                onClick={() => handleClick2(item)}
              />
              <p class="card-text">{stars}</p>
              <p class="card-text">{price}</p>
              <h4>Category:{category}</h4>
              <h4>Consoles:{consoles}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
