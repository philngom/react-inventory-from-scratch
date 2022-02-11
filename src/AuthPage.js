import { useState } from 'react';

export default function AuthPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {

  }

  function handleSignOut() {

  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input value={email}/>
        </label>
        <label>
          Password:
          <input value={password}/>
        </label>
        <button onClick={ e => handleSignIn(e.target.value) }>Sign In</button>
        <button onClick={e => handleSignOut(e.target.value) }>Sign Out</button>
      </form>
    </div>
  );
}