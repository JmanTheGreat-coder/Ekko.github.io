import React, { useState } from "react";
import products from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";



const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  return (
    <div title="All-Foods">
      <section>
        <div class="container">
          <div class="row">
            {displayPage.map((item) => (
              <div class="col-xl-4 col-lg-6 col-md-6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </div>
            ))}

            <div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFoods;
