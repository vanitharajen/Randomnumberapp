
import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  // Button click event
  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };
  const clearNumber = () => {
  setNumber(null);
};

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      <p>Click the button to generate a random number between 1 and 100.</p>

      {/* Conditional Rendering */}
      <div className="result-box">
  {number === null ? (
    <h2>No number generated yet</h2>
  ) : (
    <h2 className="number">{number}</h2>
  )}
</div>

      <div className="button-group">
  <button onClick={generateNumber}>
    Generate Random Number
  </button>

  <button onClick={clearNumber}>
    Clear
  </button>
</div>

    </div>
  );
}

export default App;
