import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://api.bybits.co.uk/auth/token";
  const config = {
    headers: {
      environment: "mock",
      "Content-Type": "application/json",
    },
  };

  const handleClick = async () => {
    const data = {
      username: username,
      password: password,
      type: "USER_PASSWORD_AUTH",
    };
    const response = await axios.post(url, data, config);
    if (response) {
      localStorage.setItem("token", response.data.access_token);
    }
  };

  return (
    <>
      <h2 data-testid="login-header-text">Sign In</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={e => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        onChange={e => setPassword(e.target.value)}
      ></input>
      <button data-testid="submit-btn" onClick={handleClick}>
        Sign in
      </button>
    </>
  );
}
