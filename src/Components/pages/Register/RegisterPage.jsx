import React, { useState } from "react";
import RegisterLinkedinLogo from "../Register/resources/Logo 1.svg";
import { UserAuth } from "../../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password, userName, profilePhoto);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-wrapper">
      <img src={RegisterLinkedinLogo} alt="" />
      <form onSubmit={handleSubmit}>
        <h1>Tell us about you</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Date of birth</label>
        <div className="date-input">
          <select>
            {months.map((el) => {
              let monthNum = 1;

              return <option value={monthNum++}>{el}</option>;
            })}
          </select>
          <select>
            {[...Array(31).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select>
            {[...Array(124).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {2023 - i}
              </option>
            ))}
          </select>
        </div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <span>User Agreement, Privacy Policy</span>, and{" "}
          <span>Cookie Policy</span>.
        </p>
        <button>Agree & Join</button>
        <p>
          Already have an account? Sign in{" "}
          <span style={{ textDecoration: "underline" }}>
            <Link to="/">here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
