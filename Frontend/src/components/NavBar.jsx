import React, { useEffect, useState } from "react";
import Button from "./premium/premiumButton";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../Styles/NavBar.css";
import logo from "../assets/images/footer/logo.webp"; // Adjust the path based on where your logo image is stored

export default function NavBar({ text, enroll }) {
  const location = useLocation();
  const homeRouteNames = [
    "/",
    "/home",
    "/research",
    "/contact-us",
    "/super_daily_app_program",
  ];
  const [currentPage, setCurrentPage] = useState(
    homeRouteNames.includes(location.pathname)
      ? "home"
      : location.pathname.substring(1)
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  const premiumPageNav = (link) => {
    if (location.hash === link) return "active";
    if (location.hash === "") {
      location.hash = "#root";
      return "active";
    }
  };

  const links =
    currentPage === "premium"
      ? [
          { href: "#root", label: "Home" },
          { href: "#product-and-cost", label: "Premium" },
          { href: "#genius-babies", label: "Success Story" },
          { href: "#why-uptodd", label: "About" },
        ]
      : [
          { to: "/home", label: "Home" },
          { to: "/premium", label: "Premium" },
          { to: "/success story", label: "Success Story" },
          { to: "/about", label: "About" },
          { to: "/blog", label: "Blog" },
        ];

  const isDesktopScreen = useMediaQuery({ minWidth: 850 });

  return (
    <nav className='navBar' aria-label='Main Navigation'>
      <img
        className='hamburger'
        onClick={toggleMenu}
        src='https://www.uptodd.com/images/newWebsite/hamburger-icon.svg'
      ></img>
      <div className='logo'>
        <img src={logo} style={{ height: "100" }} />
      </div>

      {isMenuOpen && (
        <ul className='mobileNavLinks'>
          {links.map((link) => (
            <li key={link.to || link.href} className='mobileNavLink'>
              {link.href ? (
                <a href={link.href} className={premiumPageNav(link.href)}>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={
                    decodeURIComponent(currentPage) == link.label.toLowerCase()
                      ? "active"
                      : ""
                  }
                  target={currentPage !== "premium" ? "_blank" : ""}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

      <ul className='navLinks'>
        {links.map((link) => (
          <li
            key={link.to || link.href}
            className='navLink'
            style={isDesktopScreen ? { display: "flex" } : { display: "none" }}
          >
            {link.href ? (
              <a href={link.href} className={premiumPageNav(link.href)}>
                {link.label}
              </a>
            ) : (
              <Link
                to={link.to}
                className={
                  decodeURIComponent(currentPage) == link.label.toLowerCase()
                    ? "active"
                    : ""
                }
                target={currentPage !== "premium" ? "_blank" : ""}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
        <li>
          <a href='/super_daily_app_program' target='_blank'>
            <Button text='Start for INR 449' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
