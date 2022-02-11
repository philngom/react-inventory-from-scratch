import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import MovieListPage from './MovieListPage';
import { getUser, logout } from './services/fetch-utils.js';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    await logout();

    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {
            user &&
            <ul>
              <li>
                <Link to='/movie-list'>Movies</Link>
              </li>
              <li>
                <Link to='/create'>Add Movie</Link>
              </li>
              <li>
                <button onClick={ handleLogout }>Logout</button>
              </li>
            </ul>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to="/movie-list"/>
                  : <AuthPage setUser={ setUser }/>
              }
            </Route>
            <Route exact path='/movie-list'>
              {
                user
                  ? <MovieListPage />
                  : <Redirect to='/'/>
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
