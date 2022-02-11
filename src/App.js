import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import { getUser } from './services/fetch-utils.js';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Switch>
            <Route>
              {
                !user &&
            <AuthPage setUser={ setUser }/>
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
