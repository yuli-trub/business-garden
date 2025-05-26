import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* desktop inline links */}
          <nav className="header__nav header__nav--desktop">
            <a href="#about" className="header__link">
              О курсе
            </a>
            <a href="#program" className="header__link">
              Программа
            </a>
            <a href="#personal-track" className="header__link">
              Персональный трек
            </a>
            <a href="#faq" className="header__link">
              FAQ
            </a>
            <a href="#advantages" className="header__link">
              Наши преимущества
            </a>
          </nav>

          <a className="header__btn header__btn--desktop">Записаться</a>

          {/* burger-menu mobile */}
          <div
            className={`header__burger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile dropdown: only shown on mobile */}
        <nav className={`header__nav-mobile ${menuOpen ? "open" : ""}`}>
          <a className="header__link" href="#about" onClick={handleLinkClick}>
            О курсе
          </a>
          <a className="header__link" href="#program" onClick={handleLinkClick}>
            Программа
          </a>
          <a
            className="header__link"
            href="#personal-track"
            onClick={handleLinkClick}
          >
            Персональный трек
          </a>
          <a className="header__link" href="#faq" onClick={handleLinkClick}>
            FAQ
          </a>
          <a
            className="header__link"
            href="#advantages"
            onClick={handleLinkClick}
          >
            Наши преимущества
          </a>

          <a className="header__btn">Записаться</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
