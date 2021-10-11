import React from 'react'

export default function Login() {
  return (
    <>
    <h2 data-testid='login-header-text'>Sign In</h2>
    <label htmlFor='username'>Username:</label>
    <input type='text' id='username'></input>
    <label htmlFor='password'>Password:</label>
    <input type='text' id='password'></input>
    </>
  )
}
