import React, { useState } from "react";
import LoginLinkedinLogo from "../Loginpage/resources/Logo 1.svg";
import { UserAuth } from "../../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(loginEmail, loginPassword);
      navigate("/NewsFeed");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }

    setLoginEmail("");

    setLoginPassword("");
  };

  return (
    <div className="login-wrapper">
      <img src={LoginLinkedinLogo} alt="" />
      <form className="input-form" onSubmit={handleSubmit}>
        <h1>Make the most of your professional life</h1>
        <input
          type="email"
          placeholder="Email or telephone number"
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <input
          type="password"
          placeholder="Password (6 or more characters)"
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
        />
        <p>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <span>User Agreement, Privacy Policy</span>, and{" "}
          <span>Cookie Policy</span>.
        </p>
        <button>Login</button>
        <p>
          Don't have an account? Sign up{" "}
          <span style={{ textDecoration: "underline" }}>
            <Link to="/RegisterPage">here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
