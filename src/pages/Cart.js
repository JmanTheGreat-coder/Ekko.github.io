import React from 'react'

function Cart() {
    
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    Image
                </div>
                <div class="col">
                    PRODUCT NAME	
                </div>
                <div class="col">
                    Price
                </div>
                <div class="col">
                    QTY
                </div>
                <div class="col">
                    SUBTOTAL		
                </div>
                <div class="col">
                ACTION
                </div>
            </div>
            <div class='row'>
                <div class='col-lg-12'>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
    </div>
  )
}

export default Cart