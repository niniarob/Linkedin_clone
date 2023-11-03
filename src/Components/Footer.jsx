import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-navigation">
        <div className="column">
          <h3>General</h3>
          <p>Sign Up</p>
          <p>Help Center</p>
          <p>About</p>
          <p>Press</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Developers</p>
        </div>
        <div className="column">
          <h3>Browse LinkedIn</h3>
          <p>Learning</p>
          <p>Jobs</p>
          <p>Salary</p>
          <p>Mobile</p>
          <p>Services</p>
          <p>Products</p>
        </div>
        <div className="column">
          <h3>Business Solutions</h3>
          <p>Talent</p>
          <p>Marketing</p>
          <p>Sales</p>
          <p>Learning</p>
        </div>

        <div className="flex">
          <div className="first-column">
            <h3>Directories</h3>
            <p>Members</p>
            <p>Jobsr</p>
            <p>Companies</p>
            <p>Featured</p>
            <p>Learning</p>
            <p>Posts</p>
            <p>Articles</p>
          </div>
          <div className="second-column">
            <p>Services</p>
            <p>Products</p>
            <p>Advice</p>
            <p>People Search</p>
            <p>Schools</p>
            <p>News</p>
            <p>News Letters</p>
          </div>
        </div>
      </div>
      <div className="documentations">
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
      <p className="copywrite">LinkedIn, 2023</p>
    </>
  );
};

export default Footer;
