import React, { useState } from 'react';
import TextDisplay from './components/TextDisplay';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleKeyPress = (key) => {
    setText((prevText) => prevText + ' ' + key);
  };

  const handleRemove = () => {
    setText((prevText) => {
      const words = prevText.trim().split(' ');
      words.pop();
      return words.join(' ');
    });
  };

  return (
    <div className="App">
      <TextDisplay text={text} />
      <Keyboard onKeyPress={handleKeyPress} onRemove={handleRemove} />
    </div>
  );
}

export default App;
