import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axios from 'axios';
import values from '../components/Login';

const BubblePage = () => {

  const [colorList, setColorList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/colors", values)
  //     .then((res) => {
  //           setColorList(res.data)
          
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     });
  // }, [colorList])
    

    axios.get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      

    

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );

}


export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
