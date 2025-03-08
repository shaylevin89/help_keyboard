import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Keyboard from './components/Keyboard';
import Settings from './components/Settings';
import WordList from './components/WordList';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch('/help_keyboard/words.txt')
      .then(response => response.text())
      .then(text => {
        const wordList = text.split('\n').map(word => word.trim()).filter(word => word);
        setWords(wordList);
      });
  }, []);

  const handleKeyPress = (key) => {
    setText((prevText) => (prevText ? prevText + ' ' + key : key));
  };

  const handleRemove = () => {
    setText((prevText) => {
      const words = prevText.trim().split(' ');
      words.pop();
      return words.join(' ');
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/wordlist" element={<WordList words={words} setWords={setWords} />} />
          <Route path="/" element={
            <>
              <div className="text-display">{text}</div>
              <Keyboard onKeyPress={handleKeyPress} onRemove={handleRemove} words={words} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
