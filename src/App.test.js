import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: /change to blue/i})

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: /change to blue/i})

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  expect(colorButton).toHaveTextContent(/change to red/i)
});

it('initial conditions', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: /change to blue/i})
  const checkBox = screen.getByRole('checkbox')

  expect(colorButton).toBeEnabled()
  expect(checkBox).not.toBeChecked()
})

it('checkbox disables color button on first click and enables on second', ()=>{
  render(<App />)
  const colorButton = screen.getByRole('button', {name: /change to blue/i})
  const checkBox = screen.getByRole('checkbox')

  fireEvent.click(checkBox)
  expect(colorButton).not.toBeEnabled()

  fireEvent.click(checkBox)
  expect(colorButton).toBeEnabled()
})