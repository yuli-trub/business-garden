import { useEffect, useState } from "react";
import "./header.scss";
import WhatsAppIcon from "../../assets/icons/wa-icon.svg";
import TelegramIcon from "../../assets/icons/tg-icon.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* desktop inline links */}
          <nav className="header__nav header__nav--desktop">
            <a href="#about">О курсе</a>
            <a href="#program">Программа</a>
            <a href="#personal-track">Персональный трек</a>
            <a href="#faq">FAQ</a>
            <a href="#advantages">Наши преимущества</a>
          </nav>

          <a href="#signup-form" className="header__btn header__btn--desktop">
            Записаться
          </a>

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
        <nav className={` header__nav-mobile ${menuOpen ? "open" : ""}`}>
          <div className="header__nav-links">
            <a
              className="header__burger-link"
              href="#about"
              onClick={handleLinkClick}
            >
              О курсе
            </a>
            <a
              className="header__burger-link"
              href="#program"
              onClick={handleLinkClick}
            >
              Программа
            </a>
            <a
              className="header__burger-link"
              href="#personal-track"
              onClick={handleLinkClick}
            >
              Персональный трек
            </a>
            <a
              className="header__burger-link"
              href="#faq"
              onClick={handleLinkClick}
            >
              FAQ
            </a>
            <a
              className="header__burger-link"
              href="#advantages"
              onClick={handleLinkClick}
            >
              Наши преимущества
            </a>

            <div className="header__socials">
              <a
                href="https://t.me/TrueTutoring"
                className="header__social-link"
              >
                <img src={TelegramIcon} alt="Telegram" />
              </a>
              <a
                href="https://wa.me/+79651016885"
                className="header__social-link"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>
          <a href="#signup-form" className="header__btn">
            Записаться
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
