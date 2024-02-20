  import React, { useState } from 'react'
  import './Navbar.css'
  import {Link} from 'react-scroll'

  const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
          setMenuOpen(!menuOpen);
      }

      const closeMenu = () => {
          setMenuOpen(false);
      }

      return (
          <nav className="fixed shadow nav">
              <img className="nav__brand" src='./logo_transparent.png' alt='logo'></img>
              <ul className={`nav__menu ${menuOpen ? 'nav__active' : ''}`}>
                  <li className="nav__item">
                      <Link to='inicio' spy={true} smooth={true} offset={0} duration={50} onClick={closeMenu} className="nav__link">
                          Início 
                      </Link>
                  </li>
                  <li className="nav__item">
                      <Link to='Quemsomos' spy={true} smooth={true} offset={-50} duration={50} onClick={closeMenu} className="nav__link">
                          Quem somos
                      </Link>
                  </li>
                  <li className="nav__item">
                      <Link to='produtos' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} className="nav__link">
                          Produtos
                      </Link>
                  </li>
                  <li className="nav__item">
                      <Link to='mapa' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} className="nav__link">
                          Mapa
                      </Link>
                  </li>
                  <li className="nav__item">
                      <Link to='contato' spy={true} smooth={true} offset={0} duration={50} onClick={closeMenu} className="nav__link">
                          Contato
                      </Link>
                  </li>
              </ul>
              <div onClick={toggleMenu} className={`nav__toggler ${menuOpen ? 'toggle' : ''}`}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
              </div>
          </nav>
      );
  }

  export default Navbar