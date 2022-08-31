import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import "../styles/contact.css";

function Contact() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card h-100 mt-2">
            <div class="card-body">
              <div class="row mt-2 mb-4 text-center">
                <div class="col-6">
                  <BsFillTelephoneFill size="2rem" class='info'/>
                </div>
                <div class="col-6">
                  <p>+012 345 678 102</p>
                </div>
              </div>
              <div class="row mb-4 text-center">
                <div class="col-6">
                  <BsGlobe2 size="2rem" class='info'/>
                </div>
                <div class="col-6  text-center">
                  <p>ekko147@hotmail.com</p>
                </div>
              </div>
              <div class="row mb-3 text-center">
                <div class="col-6">
                  <BsHouseFill size="2rem" class='info'/>
                </div>
                <div class="col-6">
                  <p>Address goes here, street, Crossroad 123.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Follow Us</h2>
                </div>
                <div class="col-12 text-center">
                  <BsFacebook class='social'/> 
                  <BsTwitter class='social'/>
                  <BsInstagram class='social'/>
                  <BsPinterest />
                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mt-2">
          <div class="card">
            <div class="card-body">
              <div class="account-info-wrapper">
                <h4>Get In Touch</h4>
              </div>
              <form>
                <div class="row">
                  <div class="col">
                    <label>Name</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col">
                    <label for="inputAddress">Email Address</label>
                    <input type="text" class="form-control" id="inputAddress" />
                  </div>
                </div>
              </form>
              <div class="form-group">
                <label>Subject</label>
                <input type="text" class="form-control" />
              </div>
              <form>
                <div class="row">
                  <div class="col">
                    <label>Message</label>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <button type="button" class="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
