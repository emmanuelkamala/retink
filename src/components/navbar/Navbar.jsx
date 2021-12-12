import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.svg';
import round from '../../assets/round.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#about">About us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="retink__navbar">
      <div className="retink__navbar-logo">
        <a href="/"><img src={logo} alt="logo" /></a>
      </div>
  
      <div className="retink__navbar-container">
        <Menu />
      </div>

      <div className="retink__navbar-sign">
        <button>
          <img src={round} alt="round"  className="retink__navbar-sign_round" />
          <img src={arrow} alt="arrow" className="retink__navbar-sign_arrow" />
          <p>Login</p>
        </button>
      </div>

      <div className="retink__navbar-menu">
        {
          toggleMenu ? 
            <RiCloseLine size={26} onClick={() => setToggleMenu(false)} /> : 
            <RiMenu3Line size={26} onClick={() => setToggleMenu(true)} />
        }

        {
          toggleMenu && (
            <div className="retink__navbar-menu_container scale-up-center">
              <div className="retink__navbar-container">
                <Menu />
                <div className="retink__navbar-menu_container-links-sign">
                  <button>
                    <img src={round} alt="round"  className="retink__navbar-sign_round" />
                    <img src={arrow} alt="arrow" className="retink__navbar-sign_arrow" />
                    <p>Login</p>
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
