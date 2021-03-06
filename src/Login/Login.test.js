import React from "react";
import Login from "./Login";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");

afterEach(cleanup);

describe("Login", () => {
  it("should have a header", () => {
    render(<Login />);
    const headerEl = screen.getByTestId("login-header-text");
    expect(headerEl).toBeInTheDocument();
    expect(headerEl.innerHTML).toBe("Sign In");
  });

  it("should have a username and password field", () => {
    render(<Login />);
    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it("should have a sign in button", () => {
    render(<Login />);
    const submitBtn = screen.getByTestId("submit-btn");
    expect(submitBtn).toBeInTheDocument();
  });

  it("should call axios on submit", () => {
    render(<Login />);
    const submitBtn = screen.getByTestId("submit-btn");
    userEvent.click(submitBtn);
    expect(axios.post).toHaveBeenCalled();
  });

  it("should submit user data to the API", () => {
    render(<Login />);
    const url = "https://api.bybits.co.uk/auth/token";
    const config = {
      headers: {
        environment: "mock",
        "Content-Type": "application/json",
      },
    };
    const data = {
      username: "testuser",
      password: "1234",
      type: "USER_PASSWORD_AUTH",
    };
    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByTestId("submit-btn");
    userEvent.type(usernameField, data.username);
    userEvent.type(passwordField, data.password);
    userEvent.click(submitBtn);
    expect(axios.post).toHaveBeenCalledWith(url, data, config);
  });

  it("should store the access token returned by the API", async () => {
    axios.post.mockReturnValue({
      data: {
        access_token: "123",
      },
    });
    render(<Login />);
    const submitBtn = screen.getByTestId("submit-btn");
    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
    expect(localStorage.getItem("token")).toBe("123");
  });
});
