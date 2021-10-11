import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
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

    try {
      const response = await axios.post(url, data, config);
      localStorage.setItem("token", response.data.access_token);
      history.push("/policy");
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h2 data-testid="login-header-text">Sign In</h2>
      </header>
      <section className="form-section">
        <div className='form-box-1'>
          <div className="form-box-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              required
              id="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              required
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            ></input>
            <div className="btn-box">
              <button
                data-testid="submit-btn"
                onClick={handleClick}
                className="btn-dark"
              >
                <span className="btn-text-light">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
