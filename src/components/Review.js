import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import PC from "../images/pc.png";
import bla from "../images/black guy.jpg";
import bla2 from "../images/black guy2.jpg";
import pro from "../images/profile-a.jpg";
import "./Review.css";

function Review() {
  return (
    <div>
      <div class="container-fluid">
        <section>
          <div class="row">
            <div class="col-lg-12">
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
                data-bs-pause="hover"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner" className="Review">
                  <div class="carousel-item bg1 active" data-bs-interval="1000">
                    <p class="text-light">
                      Ekko has blown my mind with its product offerings! Had no
                      idea when I visited the site that they have evolved into a
                      premier retailer beyond video games. Incredible customer
                      service and highly competitive prices with free shipping.
                      Great job GS!! Finally a much appreciated alternative to
                      Amazon - I know all of my purchases are bonafide products
                      and not fraudulent copycats!!
                    </p>

                    <img
                      src={bla}
                      alt="image"
                      class="rounded-circle img-thumbnail mb-4"
                    />
                    <h4 class="text-light mb-4 name">
                      Iida Niskanen
                    </h4>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div class="carousel-item bg1" data-bs-interval="1000">
                    <p class="text-light">
                      Great gaming store. Perfect for gamers like me and my
                      family. They have a great variety of games. Perfect for
                      all ages. They carry very affordable games as well as more
                      newer expensive games. Anything you need for your gaming
                      experience, Ekko.com has it.
                    </p>

                    <img
                      src={pro}
                      alt="image"
                      class="rounded-circle img-thumbnail mb-4"
                    />
                    <h4 class="text-light mb-4 name">
                      Johan Medaly
                    </h4>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div class="carousel-item bg1" data-bs-interval="1000">
                    <p class="text-light">
                      I’ve never encountered any issues with Ekko buying online
                      or in stores. Their checkout process is easy and they ship
                      fast and safe. They have awesome deals and I like the used
                      games they sell too. I’m happy with them and I highly
                      recommend buying from them. I’ll continue to!
                    </p>

                    <img
                      src={bla2}
                      alt="image"
                      class="rounded-circle img-thumbnail mb-4"
                    />
                    <h4 class="text-light mb-4 name">
                      Sasha Ho
                    </h4>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Review;
