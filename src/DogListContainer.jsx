// @ts-check

import { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [ breeds, setBreeds ] = useState([]);
  const [ imageList, setImageList ] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data["message"]);
      })
  },[])

  /**
   * 
   * @param {string} breed 
   */
  function handleClick(breed) {
    if (breed === "") {
      return;
    }
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
      .then((res) => res.json())
      .then((data) => {
        setImageList(data["message"]);
      })
  }
  
  return(
     <>
      <BreedsSelect breeds={Object.keys(breeds)} onBreedChange={(breed) => handleClick(breed)}/>
      <div>
        {imageList.map((url) => {
          return <img key={url} src={url} alt="dog" />
        })}
      </div>
     </>
  )
}

export default DogListContainer
