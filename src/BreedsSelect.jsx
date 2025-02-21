// @ts-check

import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{ breeds: string[], onBreedChange: (breed: string) => void }} props
 */
export const BreedsSelect = ({breeds, onBreedChange}) => {
  const [ selectedBreed, setSelectedBreed ] = useState('');

  useEffect(() => {
    if (breeds.length > 0) {
      setSelectedBreed(breeds[0]);
    }
  }, [breeds]);

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

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBreedChange: PropTypes.func.isRequired,
}

export default BreedsSelect
