import logo from './toad-token.png';

import './App.css';

setTimeout(function(){ window.location.reload(); }, 10000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Toad.Farm is updating!
        </h1>
        <h3>
          We'll be back in 1-2 minutes!
        </h3>
        <p>
          This page refreshes automatically
        </p>
      </header>
    </div>
  );
}

export default App;
