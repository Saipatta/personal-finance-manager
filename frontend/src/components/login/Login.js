import React from "react";
import "./Login.css";
import { useAuth } from "../../hooks/AuthProvider";

export default function Login() {
  const {handleLogin} = useAuth();
  return (
    <div className="login">
      <h2 className="component-heading">Login</h2>
      <form className="login-form">
        <input type="email" id="email" placeholder="abc@gmail.com" required />{" "}
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter password..."
          required
        />{" "}
        <br />
        <input type="submit" id="submit" onClick={handleLogin} />
      </form>
    </div>
  );
}
