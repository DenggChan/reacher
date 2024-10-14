import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
       
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/res/mcalogo.png`}
              alt="Marychild Academy Logo"
            />
            <span className="logo-text">Marychild Academy</span>
          </Link>

         
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>
                FAQs
              </Link>
            </li>

            {/* Mobile-Only Login Button */}
            <li className="nav-links-mobile">
              <Link to="/login" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>

          {/* Desktop "Login" Button */}
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;










