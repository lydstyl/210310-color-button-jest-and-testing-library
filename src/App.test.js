import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change to midnight blue/i,
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent(/change to Medium Violet Red/i);
});

it("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkBox = screen.getByRole("checkbox");

  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});

it("checkbox disables color button on first click and enables on second", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkBox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

it("the button color should be : disable > gray, enable > red, change & disable > gray, enable > blue", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  it("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  it("works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  it("works for multiple inner capital letters", (_) => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
    _();
  });
});

// describe('color to')
