import React, { useState, useEffect } from "react";
import list from "../data";
import Cards from "../components/card";

function Description({ item, handleClick, handleClick2 }) {
  const { description, consoles, review } = item;
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
      <div class="card">
        <div class="card-header">
        <div class="card-body text-center">
        <a class="card-link" onClick={() => setTab("desc")}>
        Description
        </a>{" "}
        /<a onClick={() => setTab("rev")}>Reviews</a>
      </div>
        </div>
        <div class="card-body">
          {tab === "desc" ? (
            <div className="tab__content">
              <p>{description}</p>
            </div>
          ) : (
            <div class="row">
              <div class="col-lg-7 col-md-12">
                <div class="card border-0">
                  <div class="card-body">
                    <h4>Johnny Dane</h4>
                    <p>{review}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="card h-100  border-0">
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
                      <div class="form-group mt-4">
                        <textarea
                          class="form-control "
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                        <button type="button" class="btn mt-2">
                          Submit
                        </button>
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
            <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-5" key={item.id}>
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
