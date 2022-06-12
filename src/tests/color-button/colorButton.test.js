import { fireEvent, render, screen } from '@testing-library/react';
import ColorButton from './ColorButton';

test('Change to blue button exists', () => {
  render(<ColorButton />);

  //find an element with a role of button and text change to blue
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorBtn).toBeInTheDocument();
});

test('button has correct initial color', () => {
  render(<ColorButton />);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  //expect the background color to  be red
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<ColorButton />);

  //get the button element
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  //click the button
  fireEvent.click(colorBtn);

  //expect the button color to change to blue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });
});

test('button text changes to Change to red', () => {
  render(<ColorButton />);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorBtn);

  //check if text changed to Change to red
  expect(colorBtn).toHaveTextContent('Change to red');
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
