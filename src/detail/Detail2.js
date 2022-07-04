import React, { useState, useEffect } from "react";
import list from "../data";
import Info from '../components/Info'
import Descrip from "../components/Description";


function Detail2({ handleClick, handleClick2}) {
  const[data, setData] = useState(list);
  let item = data[1];

  return (
    <div title="Product-details" class='container'>

      <Info key={item.id} item={item} handleClick={handleClick} handleClick2={handleClick2}/>
      <Descrip key={item.id} item={item} handleClick={handleClick} handleClick2={handleClick2}/>
      
    </div>
  );
};
export default Detail2