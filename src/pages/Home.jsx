import React, { useState } from "react";
import Carousel from '../components/Carousel';
import Consoles from '../components/Consoles';
import Items from '../components/Items';
import Review from '../components/Review';



function Home({ handleClick, handleClick2}) {


  return (
    <div>
          <Carousel />
          <Items handleClick={handleClick} handleClick2={handleClick2}/>
          <Review />
          <Consoles />
    </div>
  )
}

export default Home