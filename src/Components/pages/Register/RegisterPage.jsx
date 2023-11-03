import React, { useEffect, useState } from "react";
import RegisterLinkedinLogo from "../Register/resources/Logo 1.svg";
import { UserAuth } from "../../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

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

  const { createUser, user } = UserAuth();
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
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }

    const addUser = addDoc(collection(db, "Users"), {
      userName: userName,
    });

    setUserName("");
    setEmail("");
    setPassword("");

    console.log(user);
  };

  return (
    <div className="register-wrapper">
      <div className="combine">
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
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Date of birth</label>
          <div className="date-input">
            <select>
              {months.map((el) => {
                let monthNum = 1;

                return (
                  <option key={el} value={monthNum++}>
                    {el}
                  </option>
                );
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
          {error && <p style={{ color: "red" }}>{error}</p>}
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
      <div className="footer">
        <p>About</p>
        <p>Accessibility</p>
        <p>User Agreement</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Copyright Policy</p>
        <p>Brand Policy</p>
        <p>Guest Controls</p>
        <p>Community Guidelines</p>
        <p>Language</p>
      </div>
    </div>
  );
};

export default RegisterPage;
