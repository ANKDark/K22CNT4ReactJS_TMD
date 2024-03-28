import logo from "./logo.svg";
import "./App.css";
import TmD from "./components/TmD";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TmD email="Dinhhoangducdbp2004@gmail.com" contact="0855312279" />
    </div>
  );
}

export default App;
