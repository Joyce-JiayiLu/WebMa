import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [inputColor, setInputColor] = useState('');
  const [color, setColor] = useState('white');
  const [errorMessage, setErrorMessage] = useState('');

  function changeColor() {
    const validColors = ['green', 'blue', 'red'];
    if (validColors.includes(inputColor)) {
      setColor(inputColor);
      setErrorMessage('');
    } else {
      setColor('white');
      setErrorMessage(
        `${inputColor} is not a valid color. Please choose green, blue or red.`
      );
    }
  }

  return (
    <div className="App">
      <div id="color-square" style={{ backgroundColor: color }}></div>
      <input
        type="text"
        id="color-input"
        value={inputColor}
        onChange={(event) => setInputColor(event.target.value)}
      />
      <button id="change-color-button" onClick={changeColor}>
        Change color
      </button>
      <p id="error-message">{errorMessage}</p>
    </div>
  );
}

export default App;
