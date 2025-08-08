import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './App.css';

function DropdownExperience({ title, desc, bullets }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <strong>{title}</strong>
        <FaChevronDown
          className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className="dropdown-desc">{desc}</div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <ul className="dropdown-list">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownExperience;
