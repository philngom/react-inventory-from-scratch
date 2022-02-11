import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    await signIn(email, password);
  }

  async function handleSignOut() {
    await signUp(email, password);

  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input value={email} onChange={ e => setEmail(e.target.value) } type="email" required/>
        </label>
        <label>
          Password:
          <input value={password} required onChange={ e => setPassword(e.target.value) } type="password"/>
        </label>
        <button onClick={ handleSignIn }>Sign In</button>
        <button onClick={ handleSignOut }>Sign Out</button>
      </form>
    </div>
  );
}