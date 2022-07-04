import React, { useState, useEffect } from "react";
import Cards from "../components/card";
import list from "../data";

function Items({ handleClick, handleClick2}) {
    const[data, setData] = useState(list);

    const filterResult = (catItem) => {
        const result = list.filter((curDate) => {
            return curDate.rated === catItem;
        });
        setData(result);
    }
    
  return (
    <div>
        <div class='container'>
            <div class='row'>
                <div class='col-lg-6'>
                    <h2 class="">TOP RATED PRODUCTS</h2>
                </div>
                <div class='col-lg-6'>
                    <div class='row'>
                    <div class='nav-item'>
                        <a role="tab" data-rb-event-key="newArrival" aria-selected="false" class="nav-link" onClick={() => filterResult('New Arrivals')}><h4>New Arrivals</h4></a>
                    </div>
                    <div class='nav-item'>
                        <a role="tab" data-rb-event-key="newArrival" aria-selected="false" class="nav-link" onClick={() => filterResult('Best Sellers')}><h4>BEST SELLERS
                        </h4></a>
                    </div>
                    <div class='nav-item'>
                        <a role="tab" data-rb-event-key="newArrival" aria-selected="false" class="nav-link" onClick={() => filterResult('Sale Items')}><h4>SALE ITEMS</h4></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='container'>
        <div class="row">
                    {data.slice(0, 4).map((item) => (
                               <div class="col-lg-3 col-md-6 col-xs-6">
                                <Cards key={item.id} item={item} handleClick={handleClick} handleClick2={handleClick2}/>
                               </div>
                      
                    ))}
        </div>


        </div>
        </div>
    
  )
}

export default Items