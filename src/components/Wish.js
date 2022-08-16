import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { BsTrash } from "react-icons/bs";

const Wish = ({ wish, setWish }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = wish.filter((item) => item.id !== id);
    setWish(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    wish.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (


  
    
<div class="container-fluid ">
<div class="d-flex justify-content-center row">
  <div class="col-md-10 col-sm-12">
    <div class="p-2">
      <h4>Wish List</h4>
    </div>
    {wish.map((item) => (
      <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div class="mr-1 ">
          <img class="rounded" src={item.img} width="100" />
        </div>
        <div class="d-flex flex-column align-items-center product-details col-3">
          <h7 class="font-weight-bold">{item.title}</h7>
          <div class="d-flex flex-row product-desc">
            <div class="size mr-1">
              <span class="text-grey">Size:</span>
              <span class="font-weight-bold">{item.stars}</span>
            </div>
          </div>
        </div>
        <div>
          <h6>{item.price}</h6>
        </div>
        <BsTrash size="1.5rem" onClick={() => handleRemove(item.id)}/>
      </div>
    ))}
  </div>
</div>
</div>
        

       



  );
};

export default Wish;