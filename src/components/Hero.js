import React, { useState } from 'react'
import myImage from './img1.jpg'

const Hero = () => {

const [state1, setstate1] = useState(false);
const hover = () => {
  setstate1(!state1);
};

  return (
    <div>
        <h1>Benjamin Nguyen</h1>
        <img src={myImage} className = "benface" onMouseEnter={hover} onMouseLeave={hover} style={{
          transform: state1 ? 'scale(1.2)' : 'none', 
          transition: 'transform 1s ease-in-out' 
        }}alt="Benjamin Nguyen Face"/>
        <br></br>
        Student from University of California Riverside
        <hr></hr>
    </div>
    
  )
}

export default Hero