import React, { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const ColorButton = () => {
  const [buttonColor, setButtonColor] = useState(
    'MediumVioletRed',
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonClickHandler = () => {
    buttonColor === 'MediumVioletRed'
      ? setButtonColor('MidnightBlue')
      : setButtonColor('MediumVioletRed');
  };

  const buttonText = buttonColor === 'MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue';

  return (
    <>
      <button
        style={{ backgroundColor: isDisabled ? 'gray' : buttonColor }}
        onClick={buttonClickHandler}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(buttonText)}
      </button>
      <div>
        <input
          type="checkbox"
          id="button-checkbox"
          onChange={() => setIsDisabled((prev) => !prev)}
        />
        <label htmlFor="button-checkbox">Disable button</label>
      </div>
    </>
  );
};

export default ColorButton;
