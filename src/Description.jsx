// @ts-check

import { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const [ dogUrl, setDogUrl ] = useState("https://dog.ceo/api/breeds/image/random");

  function changeImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogUrl(data["message"]);
      }).catch((err) => {
        console.log(err);
      });
  }
  
  return(
   <>
    <DogImage imageUrl={dogUrl}/>
    <p>This is description of the page. The page show a random dog image.</p>
    <button className="button-main" onClick={() => changeImage()}>Change image</button>
   </>
  )
}

export default Description
