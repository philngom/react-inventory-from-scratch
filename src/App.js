import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {
          <AuthPage />
        }

      </main>
    </div>
  );
}

export default App;
