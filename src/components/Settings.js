import React from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <ul>
        <li>
          <Link to="/">רשימת מילים</Link>
        </li>
        <li>
          <button>Toggle Key Colors</button>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
