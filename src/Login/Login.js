import React from 'react'
import axios from 'axios'

export default function Login() {

  const handleClick = () => {
    axios.post()
  }

  return (
    <>
    <h2 data-testid='login-header-text'>Sign In</h2>
    <label htmlFor='username'>Username:</label>
    <input type='text' id='username'></input>
    <label htmlFor='password'>Password:</label>
    <input type='text' id='password'></input>
    <button data-testid='submit-btn' onClick={handleClick}>Sign in</button>
    </>
  )
}
