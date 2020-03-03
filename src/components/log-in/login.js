import React, { useState } from "react";

import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className='form'>
        <div controlId="email" bsSize="large">
          <label>Email</label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          >
          </input>
        </div>
        <div controlId="password" bsSize="large">
          <label>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          >
               </input>
        </div>
        <button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}