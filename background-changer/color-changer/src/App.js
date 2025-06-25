import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '100vh' }}>
      <h1>Background Color Changer</h1>
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('yellow')}>Yellow</button>
      <button onClick={() => handleColorChange('purple')}>Purple</button>
    </div>
  );
}

export default App;
//style={{ backgroundColor: bgColor, height: '100vh' }}> is to implement color to the useState variable bgcolor, we are using double {{}}, this is syntax
