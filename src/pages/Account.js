import React from "react";

function Account() {
  return (
    <div>
      <div class="card">
        <div class="card-body text-center">
          <a href="#" class="card-link">
            Home
          </a>{" "}
          /<span>My Account</span>
        </div>

        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto col-lg-8">
              <div class="myaccount-wrapper">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Edit Your Account Information
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="account-info-wrapper">
                          <h4>MY ACCOUNT INFORMATION</h4>
                          <h5>Your Personal Details</h5>
                        </div>
                        <form>
                          <div class="row">
                            <div class="col">
                              <label>First name</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col">
                              <label>Last name</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </form>
                        <div class="form-group">
                          <label for="inputAddress">Email Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                          />
                        </div>
                        <form>
                          <div class="row">
                            <div class="col">
                              <label>Telephone</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col">
                              <label>Address</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Change Your Password
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="account-info-wrapper">
                          <h4>CHANGE PASSWORD</h4>
                          <h5>Your Password</h5>
                          <div class="form-group">
                            <label for="inputAddress">Password</label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAddress"
                            />
                          </div>
                          <div class="form-group">
                            <label for="inputAddress">Password Confirm</label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAddress"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
