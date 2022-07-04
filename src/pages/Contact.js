import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs";
import {BsGlobe2} from "react-icons/bs";
import {BsHouseFill} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsPinterest} from "react-icons/bs";


function Contact() {
  return (
    <div class='container'>
        <div class='row'>
            <div class='col-lg-4'>
              <div class="card">
                <div class="card-body text center">
                  
                
                

                  <div class='row'>
<BsFillTelephoneFill size='2rem'/>
<div class='col'>
  <p>551818185</p>
<p>551818185</p>
</div>

                  </div>
                  <div class='row'>
                      <BsGlobe2 size='2rem'/>
                  </div>
                  <div class='row'>
                      <BsHouseFill size='2rem'/>
                  </div>
                  <div class='row'>
                                      <BsFacebook />
                  <BsTwitter />
                  <BsInstagram />
                  <BsPinterest/>
                  </div>


                </div>
              </div>
            </div>
            <div class='col-lg-8'>
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
                              <input type="text" class="form-control"  id="inputAddress"/>
                            </div>
                          </div>
                        </form>
                        <div class="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            class="form-control"
                          />
                        </div>
                        <form>
                          <div class="row">
                            <div class="col">
                              <label>Message</label>
                                                            <div class="form-group">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            

                          </div>
                        </form>
                        <button type="button" class="btn btn-primary">Submit</button>
                      </div>
              </div>
            </div>
        </div>
    </div>
  )
}  

export default Contact