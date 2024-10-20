import React, { useEffect, useState } from "react";
import Button from "./premium/premiumButton";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../Styles/NavBar.css";
import logo from "../assets/images/footer/logo.webp"; // Adjust the path based on where your logo image is stored


export default function NavBar({ inputState, setSearchedKeyword }) {
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
  const [isSearchClicked, setSearchClicked] = useState(false);
  const { inputKeyword, setInputKeyword } = inputState;

  const enterKey = e => {
    if (e.key == 'Enter') {
      toggleSearchBtn();
    }
  }

  document.addEventListener('keydown', enterKey);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setInputKeyword(e.target.value);
  }

  const toggleSearchBtn = () => {
    setSearchedKeyword(inputKeyword);
    setSearchClicked(!isSearchClicked);
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
    <>
      <nav className="navBar" style={(currentPage == 'blog' ? { background: '#f5f5f5' } : { background: 'white' })} aria-label="Main Navigation">
        <img className="hamburger" style={currentPage != 'blog' ? { order: '0' } : { order: '2' }} onClick={toggleMenu} src="https://www.uptodd.com/images/newWebsite/hamburger-icon.svg"></img>
        {(!isDesktopScreen && (currentPage == 'blog')) && <div id="search">
          <div>
            {isSearchClicked && <input type="text" onChange={handleSearch} placeholder="Search..." />}
            <img src="https://e7.pngegg.com/pngimages/461/616/png-clipart-web-development-real-estate-search-engine-optimization-multiple-listing-service-business-search-search-engine-optimization-web-design.png" height='15' onClick={toggleSearchBtn} />
          </div>
        </div>}
        <div className="logo">
          <a href={currentPage == 'blog' ? "/blog" : '/'}>
            <img src={currentPage != 'blog' ? logo : 'https://blog.uptodd.com/wp-content/uploads/2023/06/cropped-cropped-cropped-uptodd-logo1-150x48.png'} style={{ height: "100" }} />
          </a>
        </div>

        {(isMenuOpen && (currentPage != 'blog')) && (
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
          {(currentPage != 'blog') && (links.map((link) => (
            <li key={link.to || link.href} className="navLink" style={isDesktopScreen ? { display: 'flex' } : { display: 'none' }}>
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
          )))}
          <li>
            <a href={currentPage == 'blog' ? '/' : "/super_daily_app_program"} target="_blank">{currentPage != 'blog' ? <Button text="Start for INR 449" /> : <button className='blogPageBtn'>EXPLORE PROGRAMS</button>}</a>
          </li>
        </ul>
      </nav>
      {(isMenuOpen && (currentPage == 'blog')) && <div className="blog-page-mobile-navlink"><a href="/blog">Home</a></div>}
    </>
  );
}