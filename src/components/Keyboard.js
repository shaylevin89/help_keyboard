import React, { useEffect, useState } from 'react';

const colors = [
  "#f0f8ff", // Light Blue
  "#e6ffe6", // Light Green
  "#fff5e6", // Light Orange
  "#ffe6e6", // Light Red
  "#f5e6ff", // Light Purple
  "#ffe6f2", // Light Pink
  "#f9f0e6", // Light Brown
  "#e6f7ff", // Light Cyan
  "#e6ffe6", // Light Mint
  "#fff0f5", // Light Rose
  "#f0e6ff", // Light Lavender
  "#e6e6ff", // Light Periwinkle
  "#e6ffe6", // Light Lime
  "#fff5e6", // Light Apricot
  "#ffe6e6", // Light Coral
  "#f5e6ff", // Light Mauve
  "#e0ffe0", // Light Sea Green
  "#ffe0e0", // Light Salmon
  "#e0e0ff", // Light Slate Blue
  "#fff0e0", // Light Peach
  "#e0fff0", // Light Aquamarine
  "#f0e0ff", // Light Orchid
  "#e0f0ff", // Light Sky Blue
  "#f0ffe0"  // Light Honeydew
];

const Keyboard = ({ onKeyPress, onRemove }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    fetch('/words.txt')
      .then(response => response.text())
      .then(text => {
        const words = text.split('\n').map(word => word.trim()).filter(word => word);
        setKeys([...words, "⌫"]);
      })
      .catch(error => console.error('Error fetching words:', error));
  }, []);

  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {keys.map((key, index) => (
          <button
            key={index}
            onClick={() => key === "⌫" ? onRemove() : onKeyPress(key)}
            style={{ backgroundColor: colors[index % colors.length] }}
            className={key === "⌫" ? "remove-button" : ""}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
