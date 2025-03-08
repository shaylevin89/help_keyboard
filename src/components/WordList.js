import React from 'react';
import { Link } from 'react-router-dom';

function WordList({ words, setWords }) {
  const handleWordChange = (index, newWord) => {
    const updatedWords = [...words];
    updatedWords[index] = newWord;
    setWords(updatedWords);
  };

  const addWord = () => {
    setWords([...words, '']);
  };

  const removeWord = (index) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
  };

  return (
    <div>
      <Link to="/" className="home-icon">🏠</Link>
      <h2 className="title">רשימת מקשים</h2>
      <div>
        {words.map((word, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              value={word}
              onChange={(e) => handleWordChange(index, e.target.value)}
              style={{ marginRight: '10px', flex: 1 }}
            />
            <button onClick={() => removeWord(index)} style={{ cursor: 'pointer' }}>🗑️</button>
          </div>
        ))}
      </div>
      <button onClick={addWord} style={{ marginTop: '10px', cursor: 'pointer' }}>➕ הוסף מקש</button>
    </div>
  );
}

export default WordList;
