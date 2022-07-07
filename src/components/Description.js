import React, { useState, useEffect } from "react";
import list from "../data";
import Cards from "../components/card";

function Description({ item, handleClick, handleClick2 }) {
  const { description, consoles } = item;
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const relatedProduct = list.filter((item) => consoles === item.consoles);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  return (
    <div class="container">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                className={` ${tab === "desc" ? "tab__active" : ""}`}
                onClick={() => setTab("desc")}
              >
                Active
              </a>
            </li>
            <li class="nav-item">
              <a
                className={` ${tab === "rev" ? "tab__active" : ""}`}
                onClick={() => setTab("rev")}
              >
                Link
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          {tab === "desc" ? (
            <div className="tab__content">
              <p>{description}</p>
            </div>
          ) : (
            <div class="row">
              <div class="col-sm-7">
                <div class="card">
                  <div class="card-body">
                    <div className="tab__form mb-3">
                      <div className="review pt-5">
                        <p className="user__name mb-0">Jhon Doe</p>
                        <p className="user__email">jhon1@gmail.com</p>
                        <p className="feedback__text">great product</p>
                      </div>

                      <div className="review">
                        <p className="user__name mb-0">Jhon Doe</p>
                        <p className="user__email">jhon1@gmail.com</p>
                        <p className="feedback__text">great product</p>
                      </div>

                      <div className="review">
                        <p className="user__name mb-0">Jhon Doe</p>
                        <p className="user__email">jhon1@gmail.com</p>
                        <p className="feedback__text">great product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="card">
                  <div class="card-body">
                                  <h5>Add a Review</h5>      
                    <div class="row">
                      <div class="col col-md-6 col-sm-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div class="col col-md-6 col-sm-12">
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                        <button type="button" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          {relatedProduct.slice(0, 4).map((item) => (
            <div class="col-lg-3 col-md-6 col-xs-6" key={item.id}>
              <Cards
                item={item}
                handleClick={handleClick}
                handleClick2={handleClick2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
