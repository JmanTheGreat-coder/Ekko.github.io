import React from 'react'
import { useState } from 'react';
import Data  from '../allData';
import Buttons from '../components/Buttons';




function Sidebar() {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    
  
    const filterItem = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
      });
      setItem(newItem);
    };
  
    const filterConsole = (catItem) => {
      const result = Data.filter((curDate) => {
        return curDate.consoles === catItem;
      });
      setItem(result);
    };
  

  return (
    <div>
            <div class="col-lg-3">
              
              <div>
                <h4>Search</h4>
                <input id="mc-form-email" class="email" type="email" placeholder="Enter your email address..."></input>
              </div>
              
              <div>
                <h4>Platform</h4>
      
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={() => filterConsole('Playstation 5')}/>
                    <label class="form-check-label" for="gridCheck1">Playstation 5</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={() => filterConsole('Xbox One')}/>
                    <label class="form-check-label" for="gridCheck1">Xbox One</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={() => filterConsole('PC')}/>
                    <label class="form-check-label" for="gridCheck1">PC</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={() => filterConsole('Nintendo')}/>
                    <label class="form-check-label" for="gridCheck1">Nintendo Switch</label>
                  </div>
              </div>
            
              <div>
                <h4>Tag</h4>
                  <div>
                  <Buttons
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}
                  />
                  </div>
              </div>

            </div>
    </div>
  )
}

export default Sidebar