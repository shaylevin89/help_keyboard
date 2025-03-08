import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const Keyboard = ({ onKeyPress, onRemove, words }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [coloredKeys, setColoredKeys] = useState(true);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleKeyColors = () => {
    setColoredKeys(!coloredKeys);
  };

  return (
    <div className="keyboard-container">
      <button className="menu-icon" onClick={toggleMenu}>☰</button>
      {menuVisible && (
        <div className="settings-menu" ref={menuRef}>
          <Link to="/wordlist">רשימת מקשים</Link>
          <button onClick={toggleKeyColors}>
            {coloredKeys ? '🔘' : '⚪'} מקשים בצבע
          </button>
        </div>
      )}
      <div className="keyboard">
        {words.map((key, index) => (
          <button
            key={index}
            onClick={() => key === "⌫" ? onRemove() : onKeyPress(key)}
            style={{ backgroundColor: coloredKeys ? colors[index % colors.length] : 'transparent' }}
            className={key === "⌫" ? "remove-button" : ""}
          >
            {key}
          </button>
        ))}
        <button onClick={onRemove} className="remove-button">⌫</button>
      </div>
    </div>
  );
};

export default Keyboard;
