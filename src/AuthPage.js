import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';
import './AuthPage.css';

export default function AuthPage({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    const user = await signIn(email, password);
    setUser(user);
  }

  async function handleSignUp() {
    const user = await signUp(email, password);
    setUser(user);

  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="auth-page">
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
        <button onClick={ handleSignUp }>Sign Up</button>
      </form>
    </div>
  );
}