import { render, screen, fireEvent } from '@testing-library/react';
// import { fireEvent } from '@testing-library/user-event';
import App from './App';

// test('renders change color button', () => {
//   render(<App />);
//   const button = screen.getByRole('button');
//   expect(button).toBeInTheDocument();
// });

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: /change to blue/i})

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {name: /change to blue/i})

  // fireEvent(colorButton, new MouseEvent('click'))
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  expect(colorButton).toHaveTextContent(/change to red/i)

});
