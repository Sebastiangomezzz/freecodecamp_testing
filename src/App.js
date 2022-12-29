import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn testing and Development.
        </p>
        <a
          className="App-link"
          href="https://ultimateqa.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-react-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
