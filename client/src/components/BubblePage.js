import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


//Stage 2 - Consuming the API

//Step 2a: When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(response => {
        // console.log(res)
        setColorList(response.data)
      })
      .catch(err => console.log(err));

  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
