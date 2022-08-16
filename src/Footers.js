import React from 'react'

function Footers() {
  return (
    <div>
        <div class="container-fluid header">
  <footer class="row row-cols-5 py-5 my-5 border-top pt-100 pb-70">

    <div class="col-lg-3 col-md-4 col-sm-4 col-8 mt-2">
        <h2>Ekko.</h2>
        <h5>2022 @ekko</h5>
        <h5>All Rights Reserved</h5>
    </div>

    <div class="col-lg-2 col-md-4 col-sm-4 col-8 mt-2">
      <h5>Section</h5>
      <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Store Location</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Order Tracking</a></li>
      </ul>
    </div>

    <div class="col-lg-2 col-md-4 col-sm-4 col-8 mt-2">
      <h5>Section</h5>
      <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Support Policy</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
      </ul>
    </div>

    <div class="col-lg-2 col-md-4 col-sm-4 col-8 mt-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Youtube</a></li>
        </ul>
    </div>

    <div class="col-lg-2 col-md-8 col-sm-8 col-8 mt-2">
        <h5>Subscribe</h5>
        <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Get E-mail updates about our latest shop and special offers.</a></li>
            <input id="mc-form-email" class="email" type="email" placeholder="Enter your email address..."></input>
            <button type="button" class="btn btn-primary">Subscribe</button>
        </ul>
    </div>
  </footer>
  
</div>
    </div>
  )
}

export default Footers