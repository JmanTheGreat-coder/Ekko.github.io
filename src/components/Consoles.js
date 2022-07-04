import React from 'react'
import PC from '../images/pc (2).png'
import Play from '../images/playstation (2).png'
import Xbox from '../images/xbox.png'
import Nin from '../images/switch.png'

function Consoles() {
  return (
    <div class=" text-center">
      <div class='container'>
        <div class="row text-center mx-auto">
          <div class="p-3 col-lg-3 col-md-6 col-sm-6">
              <img src={PC} alt='pc'></img>  
          </div>
          <div class="p-3 col-lg-3 col-md-6 col-sm-6">
              <img src={Play} alt='pc'></img>  
          </div>
          <div class="p-3 col-lg-3 col-md-6 col-sm-6">
                    <img src={Xbox} alt='pc'></img>
          </div>
          <div class="p-3 col-lg-3 col-md-6 col-sm-6">
                <img src={Nin} alt='pc'></img>
          </div>
        </div>
    </div>   
  
        
    </div>
  )
}

export default Consoles