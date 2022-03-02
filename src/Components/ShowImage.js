import React from 'react'
import './style.css'
// import 'https://unsplash.com/photos/OhKElOkQ3RE'
const ShowImage = ({ImgLink,box}) => {
  // console.log("Box"+box.topRow)
  // console.log("Box"+box.bottomRow)
  // console.log("Box"+box.leftCol)
  // console.log("Box"+box.rightCol)
  // [{}]

  box.forEach(element => {
    
  });
  
  return (
    <>
        <div className="img-container center ma2">
            <div className=' con'>
              <img id='img-detect' alt='ll' src={ImgLink} width='500px' height='auto'/>
             { box.map((curElem,index)=>{

              return(<div key={index} className="bounding-box" style={{top:curElem.topRow,bottom:curElem.bottomRow,left:curElem.leftCol,right:curElem.rightCol}}>

              </div>);
              })}
            </div>
        </div>
  
    </>
  )
}

// {ImgLink===''?"Enter link":
// <>
//     <img 
// src={ImgLink}
// alt="new"
// id='img-detect'
// width='500px'
// height='auto'
// />
// <div className='bounding-box' style={{top:box.topRow,bottom:box.bottomRow,left:box.leftCol,right:box.rightCol}}  >12</div>
// </>

// }
// style={{top:box.topRow,bottom:box.bottomRow,left:box.leftCol,right:box.rightCol}}
export default ShowImage