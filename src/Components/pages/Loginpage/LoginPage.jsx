import React, { useState } from "react";
import LoginLinkedinLogo from "../Loginpage/resources/Logo 1.svg";
import { UserAuth } from "../../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/NewsFeed");
    } catch (err) {
      setError(err.message);
    }

    setEmail("");

    setPassword("");
  };

  return (
    <div className="login-wrapper">
      <img src={LoginLinkedinLogo} alt="" />
      <form className="input-form" onSubmit={handleSubmit}>
        <h1>Make the most of your professional life</h1>
        <input
          type="text"
          placeholder="Email or telephone number"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password (6 or more characters)"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
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
