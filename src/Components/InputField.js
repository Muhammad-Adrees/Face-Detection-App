
import React,{useState} from 'react';
import './style.css'
const InputField = ({getLink}) => {
    const [InputVal, setInputVal] = useState("")
    return (
        <>
            <div className="main-input-container f3 black ma2 pa2">

                <p>{'This Face detection app will detect your face in the picture 👀'}</p>
                <div className="input-container center pa4 ma4 shadow-5">
                    <input type="text" className='f2 w-70 input-link'
                    value={InputVal}
                    placeholder='Enter Image url'
                    onChange={(event)=>setInputVal(event.target.value)}
                     />
                    <button className='detect-btn w-30 grow link ph3 pv2 dib white bg-light-purple  '
                    onClick={()=>{
                        getLink(InputVal)
                        setInputVal('')}} >Detect</button>
                </div>
            </div>
        </>
    )
}

export default InputField