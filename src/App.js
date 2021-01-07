import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <p>
          Things I need to do:
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the stupid dawg</li>
        </ul>
        </p>
        <a
          className="App-link"
          href="https://github.com/shaunherry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shaun's GitHub 
        </a>
      </header>
    </div>
  );
}

export default App;
