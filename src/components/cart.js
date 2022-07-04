import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Paypal from '../components/Paypal'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState('0');

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (

<div>

       <article>
        <div class="container px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-5">
            <h4 class="heading">Shopping Bag</h4>
        </div>
        <div class="col-7">
            <div class="row text-right">
                <div class="col-3">
                    <h6 class="mt-2">Stars</h6>
                </div>
                <div class="col-3">
                    <h6 class="mt-2">Quantity</h6>
                </div>
                <div class="col-3">
                    <h6 class="mt-2">Price</h6>
                </div>
                <div class="col-3">
                    <h6 class="mt-2">Remove</h6>
                </div>
            </div>
        </div>
    </div>


          {cart.map((item) => (
        <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book">
                    <img src={item.img} class="book-img"/>
                </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{item.title}</h6>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-3">
                    <p class="mob-text">{item.stars}</p>
                </div>
                <div class="col-3">
                    <div class="row d-flex justify-content-end px-3">
                      <button onClick={() => handleChange(item, 1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                </div>
                <div class="col-3">
                    <h6 class="mob-text">{item.price}</h6>
                </div>
                <div class="col-3">
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>      
            </div>
        </div>
    </div>
    ))}



    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="card">
                <div class="row">

                    <div class="col-lg-5">
                        <Paypal price={price}/>
                    </div>
                    <div class="col-lg-4 mt-2">
                        <div class="row d-flex justify-content-between px-4">
                            <p class="mb-1 text-left">Subtotal</p>
                            <h6 class="mb-1 text-right">${price}</h6>
                        </div>
                        <div class="row d-flex justify-content-between px-4">
                            <p class="mb-1 text-left">Shipping</p>
                            <h6 class="mb-1 text-right">$2.99</h6>
                        </div>
                        <div class="row d-flex justify-content-between px-4" id="tax">
                            <p class="mb-1 text-left">Total (tax included)</p>
                            <h6 class="mb-1 text-right">${price}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </article>
</div>

  
    
 
        

       



  );
};

export default Cart;
