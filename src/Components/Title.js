import React from 'react'
import './style.css'
import Tilt from 'react-parallax-tilt';
const Title = () => {
  return (
    <div style={{display:'flex',justifyContent:'flex-start'}} className='pa2'>
    <Tilt>
      <div className=" shadow-2 pointer title-container pa3">
      <i className="fa-solid fa-skull skull-icon f1 ma2 "></i>
        {/* <p className='f3'>Face Detection App</p> */}
      </div>
    </Tilt>
    </div>
  )
}

export default Title