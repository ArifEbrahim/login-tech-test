import React from "react";
import Policy from "./Policy";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should have a header", () => {
  render(<Policy />);
  const headerEl = screen.getByText(/my policy/i);
  expect(headerEl).toBeInTheDocument();
});

it('should render policy sections', () => {
  render(<Policy />);
  const policyRefEl = screen.getByText(/policy reference:/i);
  const coverTypeEl = screen.getByText(/cover type:/i);
  const carEl = screen.getByText(/car:/i);
  const addressEl = screen.getByText(/address:/i);
  expect(policyRefEl).toBeInTheDocument();
  expect(coverTypeEl).toBeInTheDocument();
  expect(carEl).toBeInTheDocument();
  expect(addressEl).toBeInTheDocument();
})