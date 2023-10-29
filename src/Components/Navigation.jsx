import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LoginPage</Link>
        </li>
        <li>
          <Link to="/NewsFeed">NewsFeed</Link>
        </li>
        <li>
          <Link to="/ProfilePage">ProfilePage</Link>
        </li>
        <li>
          <Link to="/RegisterPage">RegisterPage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
