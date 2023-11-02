import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Autogenerator = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Start with dropdown hidden
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize the button as disabled

  const dropdownOptions = [
    'TSA',
    'Org admin',
    'Content admin',
    'Support admin',
    'Instruter',
    'Learner',
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsVisible(true);
    // Enable the button when an item is selected
    setIsButtonDisabled(false);
  };

  const handleShowDropdown = () => {
    console.log('call');
    axios
      .post('http://localhost:3001/Loginas', { role: selectedItem })
      .then((response) => {
        console.log(response.data);
      })
      
      .catch((error) => {
        console.error(error);
      });
    setIsVisible(false);
  };

  return (


    <div className="dropdown-container">
      {isVisible ? (
        <div className="dropdown">
          <select onChange={(e) => handleSelect(e.target.value)}>
            <option value="">Select an option</option>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button id='Loginas' onClick={handleShowDropdown} disabled={isButtonDisabled}>
            Generate
          </button>
        </div>
      ) : (
        <div>
          <p>Selected: {selectedItem}</p>
        </div>
      )}

    </div>
    
  );
  
};

export default Autogenerator;
