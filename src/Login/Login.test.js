import React from "react";
import Login from "./Login";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import axios from 'axios';

jest.mock('axios')

afterEach(cleanup);

it("should have a header", () => {
  render(<Login />);
  const headerEl = screen.getByTestId("login-header-text");
  expect(headerEl).toBeInTheDocument();
  expect(headerEl.innerHTML).toBe("Sign In");
});

it("should have a username and password field", () => {
  render(<Login />);
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)
  expect(usernameField).toBeInTheDocument()
  expect(passwordField).toBeInTheDocument()
});

it('should have a sign in button', () => {
  render(<Login />);
  const submitBtn = screen.getByTestId('submit-btn')
  expect(submitBtn).toBeInTheDocument()
})

it('should call axios on submit', ()=> {
  render(<Login />);
  const submitBtn = screen.getByTestId('submit-btn');
  userEvent.click(submitBtn);
  expect(axios.post).toHaveBeenCalled()
})