import { useState } from 'react';

export default function CreateMovie() {

  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [mainCharacter, setMainCharacter] = useState('');
  const [year, setYear] = useState(null);


  return (
    <div>
      <form>
        <label>
          Title:
          <input value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          Year:
          <input value={year} onChange={(e) => setYear(e.target.value)}/>
        </label>
        <label>
          Director:
          <input value={director} onChange={(e) => setDirector(e.target.value)}/>
        </label>
        <label>
          Main Character:
          <input value={mainCharacter} onChange={(e) => setMainCharacter(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}