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
