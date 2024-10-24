// @ts-check

import { useState } from 'react';

/**
 * @param {{ breeds: string[], onBreedChange: (breed: string) => void }} props
 */
export const BreedsSelect = ({breeds, onBreedChange}) => {
  const [ selectedBreed, setSelectedBreed ] = useState("");
  /**
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  function handleChange(e) {
    setSelectedBreed(e.target.value);
  }
  return(
   <>
    <select value={selectedBreed} onChange={(e) => handleChange(e)}>
      {breeds.map((breed) => {
        return <option key={breed} value={breed}>{breed}</option>
      })}
    </select>
    <button className="button-main" onClick={() => onBreedChange(selectedBreed)}>表示</button>
   </>
  )
}

export default BreedsSelect
