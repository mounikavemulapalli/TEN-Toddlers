// import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import '../Styles/NavBar.css';
import {logo} from '../assets/images/logo.webp'; // Adjust the path based on where your logo image is stored

const NavBar = ({ text, enroll }) => {
  const location = useLocation(); // Get the current route path
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    switch (location.pathname) {
      case "/premium_program":
        setCurrentPage("premium"); // Ensure consistent casing
        break;
      case "/success":
        setCurrentPage("success");
        break;
      case "/blog":
        setCurrentPage("blog");
        break;
      default:
        setCurrentPage("home");
        break;
    }
  }, [location]);

  const links = currentPage === "premium"
    ? [
        { to: "/home", label: "Home" },
        { to: "/premium", label: "Premium" },
        { to: "/achievers", label: "Success Story" },
        { to: "/aboutus", label: "About" }
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/premium", label: "Premium" },
        { to: "/achievers", label: "Success Story" },
        { to: "/about", label: "About" },
        { to: "/blog", label: "Blog" }
      ];

  return (
    <nav className="navBar" aria-label="Main Navigation">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "50px" }} /> {/* Adjust height as needed */}
      </div>
      <ul className="navLinks">
        {links.map((link, index) => (
          <li key={index} className="navLink">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Button className="shiningButton" text="Start for INR 149" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
