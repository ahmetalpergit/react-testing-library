import React, { useState } from 'react';

const ColorButton = () => {
  const [buttonSettings, setButtonSettings] = useState({
    color: 'red',
    text: 'Change to blue',
  });
  const [isDisabled, setIsDisabled] = useState(false);

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
    <>
      <button
        style={{ backgroundColor: buttonSettings.color }}
        onClick={buttonClickHandler}
        disabled={isDisabled}
      >
        {buttonSettings.text}
      </button>
      <div>
        <input
          type="checkbox"
          name="button-checkbox"
          onChange={() => setIsDisabled((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default ColorButton;
