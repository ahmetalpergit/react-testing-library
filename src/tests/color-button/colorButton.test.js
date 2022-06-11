import { render, screen } from '@testing-library/react';
import ColorButton from './ColorButton';

test('button has correct initial color', () => {
  //find an element with a role of button and text change to blue
  render(<ColorButton />);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  //expect the background color to  be red
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {});

test('button turns blue when clicked', () => {});
