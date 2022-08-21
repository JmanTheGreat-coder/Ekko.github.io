import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Paypal from "../components/Paypal";
import { BsTrash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState("0");

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


      <div class="container-fluid ">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10 col-sm-12">
            <div class="p-2">
              <h4>Shopping cart</h4>
            </div>
            {cart.map((item) => (
              <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div class="mr-1 ">
                  <img class="rounded" src={item.img} width="100" />
                </div>
                <div class="d-flex flex-column align-items-center product-details col-3">
                  <h6 class="font-weight-bold">{item.title}</h6>
                  <div class="d-flex flex-row product-desc">
                    <div class="size mr-1">
                      <span class="text-grey">Size:</span>
                      <span class="font-weight-bold">{item.stars}</span>
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-end px-3">
                  <BsPlus size="1.5rem" onClick={() => handleChange(item, 1)}/>
                  <h5>{item.amount}</h5>
                  <BsDash size="1.5rem" onClick={() => handleChange(item, -1)}/>
                </div>
                <div>
                  <h6>{item.price}</h6>
                </div>
                <BsTrash size="1.5rem" onClick={() => handleRemove(item.id)}/>
              </div>
            ))}
          </div>
        </div>

          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="card border-0 mt-5">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Paypal price={price} />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6 mt-2">
                    <div class="row d-flex justify-content-between px-4">
                      <p class="mb-1 text-left">Subtotal</p>
                      <h6 class="mb-1 text-right">${price}</h6>
                    </div>
                    <div class="row d-flex justify-content-between px-4">
                      <p class="mb-1 text-left">Shipping</p>
                      <h6 class="mb-1 text-right">$2.99</h6>
                    </div>
                    <div
                      class="row d-flex justify-content-between px-4"
                      id="tax"
                    >
                      <p class="mb-1 text-left">Total (tax included)</p>
                      <h6 class="mb-1 text-right">${price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Cart;
