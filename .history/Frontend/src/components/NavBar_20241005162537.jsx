import React, { useEffect, useState } from "react";
import Button from "./premium/premiumButton";
import { Link, useLocation } from "react-router-dom";
import '../Styles/NavBar.css';
import logo from '../assets/images/footer/logo.webp'; // Adjust the path based on where your logo image is stored

const NavBar = ({ text, enroll }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname === '/' ? 'home' : (location.pathname).substring(1));

  useEffect(() => {
    setCurrentPage(currentPage);
  });

  const premiumPageNav = (link) => {
    if (location.hash == link) return 'active'
    if (location.hash == '') {
      location.hash = '#root';
      return 'active';
    }
  }

  const links = currentPage === "premium"
    ? [
      { href: '#root', label: "Home" },
      { href: "#product-and-cost", label: "Premium" },
      { href: "#genius-babies", label: "Success Story" },
      { href: "#why-uptodd", label: "About" }
    ]
    : [
      { to: "/home", label: "Home" },
      { to: "/premium", label: "Premium" },
      { to: "/success story", label: "Success Story" },
      { to: "/about", label: "About" },
      { to: "/blog", label: "Blog" }
    ];

  return (
    <nav className="navBar" aria-label="Main Navigation">
      <div className="logo">
        <img src={logo} alt="Company Logo" style={{ height: "50px" }} onError={(e) => e.target.src = 'fallback-image-url'} /> {/* Fallback image if needed */}
      </div>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.to || link.href} className="navLink">
            {link.href ? (
              <a href={link.href} className={premiumPageNav(link.href)}>{link.label}</a>
            ) : (
              <Link to={link.to} className={decodeURIComponent(currentPage) == (link.label).toLowerCase() ? 'active' : ''} target={currentPage != 'premium' ? '_blank' : ''}>
                {link.label}
              </Link>)}
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
