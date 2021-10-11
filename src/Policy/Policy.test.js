import React from "react";
import Policy from "./Policy";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

jest.mock("axios");

afterEach(cleanup);

describe("Policy", () => {
  it("should have a header", () => {
    render(<Policy />);
    const headerEl = screen.getByText(/my policy/i);
    expect(headerEl).toBeInTheDocument();
  });

  it("should render policy sections", () => {
    render(<Policy />);
    const policyRefEl = screen.getByText(/policy reference:/i);
    const coverTypeEl = screen.getByText(/cover type:/i);
    const carEl = screen.getByText(/car:/i);
    const addressEl = screen.getByText(/address:/i);
    const nameEl = screen.getByText(/name:/i);
    expect(policyRefEl).toBeInTheDocument();
    expect(coverTypeEl).toBeInTheDocument();
    expect(carEl).toBeInTheDocument();
    expect(addressEl).toBeInTheDocument();
    expect(nameEl).toBeInTheDocument();
  });

  it("should have a sign out button", () => {
    render(<Policy />);
    const signoutBtn = screen.getByText(/sign out/i);
    expect(signoutBtn).toBeInTheDocument();
  });

  it('should call the API when rendered initially', () => {
    render(<Policy />);
    expect(axios.get).toHaveBeenCalled()
  })
});
