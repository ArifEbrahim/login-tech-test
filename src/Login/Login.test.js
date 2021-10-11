import React from "react";
import Login from "./Login";
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('should have a header', () => {
  render(<Login />)
  const headerEl = screen.getByTestId('login-header-text')
  expect(headerEl).toBeInTheDocument();
  expect(headerEl.innerHTML).toBe('Sign In')
})