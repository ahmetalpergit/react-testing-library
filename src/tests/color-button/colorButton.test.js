import { fireEvent, render, screen } from '@testing-library/react';
import ColorButton from './ColorButton';
import { replaceCamelWithSpaces } from './ColorButton';

test('Change to Midnight Blue button exists', () => {
  render(<ColorButton />);

  //find an element with a role of button and text change to blue
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorBtn).toBeInTheDocument();
});

test('button has correct initial color', () => {
  render(<ColorButton />);
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  //expect the background color to  be red
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns Midnight Blue when clicked', () => {
  render(<ColorButton />);

  //get the button element
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  //click the button
  fireEvent.click(colorBtn);

  //expect the button color to change to blue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

test('button text changes to Change to Medium Violet Red', () => {
  render(<ColorButton />);
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(colorBtn);

  //check if text changed to Change to Medium Violet Red
  expect(colorBtn).toHaveTextContent('Change to Medium Violet Red');
});

test('button has a checkbox', () => {
  render(<ColorButton />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('when box is unchecked button is enabled', () => {
  render(<ColorButton />);

  const colorBtn = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(checkbox).not.toBeChecked();
  expect(colorBtn).not.toBeDisabled();
});

test('when box is checked button is disabled', () => {
  render(<ColorButton />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  const colorBtn = screen.getByRole('button');
  expect(colorBtn).toBeDisabled();
});

test('when button is disabled its color turns gray', () => {
  render(<ColorButton />);

  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
});


describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletBlue')).toBe('Medium Violet Blue');
  });
});