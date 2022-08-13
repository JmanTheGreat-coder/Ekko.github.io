import React, { useState, useEffect } from "react";
import list from "../data";
import Cards from "../components/card";
import ReactPaginate from "react-paginate";
import '../components/pagination.css'





function App({ handleClick, handleClick2}) {

  const[data, setData] = useState(list);

  const filterResult = (catItem) => {
    const result = list.filter((curDate) => {
        return curDate.category === catItem;
    });
    setData(result);
}
const filterConsoles = (catItem) => {
  const result = list.filter((curDate) => {
      return curDate.consoles === catItem;
  });
  setData(result);
}

const [searchTerm, setsearchTerm] = useState("")

const [sortState, setSortState] = useState("none");
const sortMethods = {
  none: { method: (a, b) => null },
  ascending: { method: undefined },
  descending: { method: (a, b) => (a > b ? -1 : 1) },
};



const [pageNumber, setPageNumber] = useState(0);
const productPerPage = 9;
const visitedPage = pageNumber * productPerPage;


const pageCount = Math.ceil(data.length / productPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
};





    /** Function to sort ascending order */
    const ascOrder = (): void => {
      setData([].concat(data).sort((a: any, b: any) => a.price - b.price));
  };

  /** Function to sort descending order */
  const descOrder = (): void => {
    setData([].concat(data).sort((a: any, b: any) => b.price - a.price));
  };












  return (
    <div className="App">
       
       <div class="container">          
          <div class="row">
            <div class="col-lg-3">
              
              <div>
                <h4>Search</h4>
                <input id="mc-form-email" class="email" type="email" placeholder="Search Game"
                onChange={(e) => {setsearchTerm(e.target.value);
                }}
                ></input>
              </div>
              
              <div>
                <h4>Platform</h4>
      
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" onClick={() => filterConsoles('Playstation 5')}/>
                    <label class="form-check-label" for="gridCheck1">Playstation 5</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"
                      onClick={() => filterConsoles('Xbox One')}
                    />
                    <label class="form-check-label" for="gridCheck1">Xbox One</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" 
                      onClick={() => filterConsoles('PC')}
                    />
                    <label class="form-check-label" for="gridCheck1">PC</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"
                      onClick={() => filterConsoles('Nintendo')}
                    />
                    <label class="form-check-label" for="gridCheck1">Nintendo Switch</label>
                  </div>
              </div>
            
              <div>
                <h4>Tag</h4>
                  <div>
                  <button className='btn' onClick={() => setData(list)}>All</button>
                  <button className='btn' onClick={() => filterResult('Adventure')}>Adventure</button>
                  <button className='btn' onClick={() => filterResult('First-person shooter')}>First-person shooter</button>
                  <button className='btn' onClick={() => filterResult('Action')}>Action</button>
                  <button className='btn' onClick={() => filterResult('Racing')}>Racing</button>

                  </div>
              </div>

            </div>
            <div class="col-lg-9">
            <div class="card">
              <div class="card-body">
                <div class='row'>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Default
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" >Default</a></li>
                  <li><a class="dropdown-item" onClick={() => ascOrder()}>Price - Low to High</a></li>
                  <li><a class="dropdown-item" onClick={() => descOrder()}>Price - High to Low</a></li>
                </ul>
              </div>
                  <p>Showing {data.length} of 20 result</p>
                </div>
              </div>
            </div>
              <div class='row'>
              
                <div class='col-lg-12'>
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    {data.sort(sortMethods[sortState].method)
                    .slice(
                      visitedPage,
                      visitedPage + productPerPage
                    ).filter((val) => {
                      if (searchTerm === "") {
                      return val;
                    } else if (
                      val.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                    }).map((item) => (
                      <Cards key={item.id} item={item} handleClick={handleClick} handleClick2={handleClick2}/>
                    ))}

                    </div>

                  </div>
                  </div>
                  <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
              </div>
            </div>
        </div>
      </div>

    
  );
}

export default App;

