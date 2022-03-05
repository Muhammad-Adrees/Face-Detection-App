import React, { useState ,useEffect} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Title from './Components/Title';
import InputField from './Components/InputField';
import ShowImage from './Components/ShowImage';

function App() {
  const [ImgLink, setImgLink] = useState('');
  const [boundingArr,setBoundingArr]=useState([]);
  const [check, setcheck] = useState(true)
  const getLink = (link) => {
    
    if (!link) {
      alert("Field cannot empty");
    }
    else {
      
      setImgLink(link);
      console.log("Button link clicked")


    }
  }

  
  useEffect(() => {
    if(check)
    {
      setcheck(false);
    }
    else{

      callApi(ImgLink)
    }
  }, [ImgLink])

  const displayFaceLoc=(obj)=>
  {
    // console.log(obj)
    setBoundingArr(obj);
    console.log("Bounding arr"+boundingArr);
  }

  const callApi = (ImgLink) => {
    console.log("Enter in call api:")
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "user_id", // insert you clarifai account user id
        "app_id": "app_id" // insert you clarifai account app id
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": "Image link" // image url which you want to process
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key {your Api key here}' // add api key here
      },
      body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs", requestOptions)
    .then(response => response.text())
    .then(result =>displayFaceLoc(calculateFaceLoc(JSON.parse(result).outputs[0].data.regions)))
    .catch(error => console.log('error', error));

    // response.outputs[0].data.regions[0].region_info.bounding_box
  }
  
  const calculateFaceLoc=(result)=>{
    let FaceLoc=[];
   console.log(result)
    const image=document.getElementById('img-detect');

    // for (const key in FaceLoc) {
    //   console.log(FaceLoc[key])
    // }
    // console.log(image)

    // result.forEach(element => {
    //   FaceLoc.push(element.region_info.bounding_box);
    // });
    // for (const key in FaceLoc[0]) {
    //   console.log(FaceLoc[key])
    // }
    // console.log(image)
    result.forEach(element => {
    FaceLoc.push( element.region_info.bounding_box);
    });
    
    for (const key in FaceLoc[0]) {
     console.log(FaceLoc[0][key])
    }

    const width=Number(image.width);
    const height=Number(image.height);

    // const faceobj={
    //   leftCol:FaceLoc.left_col*width,
    //   topRow:FaceLoc.top_row*height,
    //   bottomRow:height-(FaceLoc.bottom_row*height),
    //   rightCol:width-(FaceLoc.right_col*width)
    // }
    let dimObj=[];
    FaceLoc.forEach(element => {
      const faceobj={
          leftCol:element.left_col*width,
          topRow:element.top_row*height,
          bottomRow:height-(element.bottom_row*height),
          rightCol:width-(element.right_col*width)
        }
        dimObj.push(faceobj)
    });

    console.log("Dim obj"+dimObj);

    return dimObj

  }
 
  

  return (
    <div className="App">
      <Menu />
      <Title />
      <InputField getLink={getLink} />
      <ShowImage ImgLink={ImgLink} box={boundingArr} />
    </div>
  );
}

export default App;
