import { useState } from 'react';
import { createMovie } from './services/fetch-utils.js';
import { useHistory } from 'react-router-dom';

export default function CreateMovie() {

  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [mainCharacter, setMainCharacter] = useState('');
  const [year, setYear] = useState(null);
  const history = useHistory();

  function resetForm() {
    setName('');
    setDirector('');
    setMainCharacter('');
    setYear(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createMovie({
      name,
      director,
      main_character: mainCharacter,
      year_released: year
    });

    resetForm();
    history.push('/movie-list');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={name} required onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          Year:
          <input value={year} required type='number' onChange={(e) => setYear(e.target.value)}/>
        </label>
        <label>
          Director:
          <input value={director} required onChange={(e) => setDirector(e.target.value)}/>
        </label>
        <label>
          Main Character:
          <input required value={mainCharacter} onChange={(e) => setMainCharacter(e.target.value)}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}