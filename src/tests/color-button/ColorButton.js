import React, { useState } from 'react';

const ColorButton = () => {
  const [buttonSettings, setButtonSettings] = useState({
    color: 'red',
    text: 'Change to blue',
  });

  const buttonClickHandler = () => {
    buttonSettings.color === 'red'
      ? setButtonSettings({
          color: 'blue',
          text: 'Change to red',
        })
      : setButtonSettings({
          color: 'red',
          text: 'Change to blue',
        });
  };

  return (
    <button
      style={{ backgroundColor: buttonSettings.color }}
      onClick={buttonClickHandler}
    >
      {buttonSettings.text}
    </button>
  );
};

export default ColorButton;
