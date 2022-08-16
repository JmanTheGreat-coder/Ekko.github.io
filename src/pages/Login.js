import React, { useState, useEffect } from "react";

function Login() {
  const [tab, setTab] = useState("desc");
  return (


    <div class='container'>

      <div class="card-body text-center">
        <a href="#" class="card-link">
          Home
        </a>{" "}
        /<span>Login Register</span>
      </div>

      <ul class="nav nav-tabs card-header-tabs">
        <div class="card-body text-center">
          <a
            class="card-link"
            aria-current="true"
            className={` ${tab === "desc" ? "tab__active" : ""}`}
            onClick={() => setTab("desc")}
          >
            Login
          </a>{" "}
          /
          <span
            className={` ${tab === "rev" ? "tab__active" : ""}`}
            onClick={() => setTab("rev")}
          >
            Register
          </span>
        </div>
      </ul>

          


      <div class="container col-lg-6">
        <div class="card">
          <div class="card-body">
            {tab === "desc" ? (
              <div className="tab__content">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Username
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    
    </div>

  );
}

export default Login;
