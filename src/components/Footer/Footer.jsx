import "./footer.scss";
import WhatsAppIcon from "../../assets/icons/wa-icon.svg";
import TelegramIcon from "../../assets/icons/tg-icon.svg";
import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__externals">
          <a
            href="https://www.truetutoring.ru/"
            target="blank"
            className="footer__logo footer__logo--mobile"
          >
            <img src={Logo} alt="TrueTutoring Logo" />
          </a>
          <div className="footer__socials footer__socials--mobile">
            <a href="https://t.me/TrueTutoring" className="footer__social-link">
              <img src={TelegramIcon} alt="Telegram" />
            </a>
            <a
              href="https://wa.me/+79651016885"
              className="footer__social-link"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <a
          href="https://www.truetutoring.ru/"
          target="blank"
          className="footer__logo footer__logo--desktop"
        >
          <img src={Logo} alt="TrueTutoring Logo" />
        </a>
        <a href="#about" className="footer__link">
          О курсе
        </a>
        <a href="#program" className="footer__link">
          Программа
        </a>
        <a href="#personal-track" className="footer__link">
          Персональный трек
        </a>
        <a href="#faq" className="footer__link">
          FAQ
        </a>
        <a href="#advantages" className="footer__link">
          Наши преимущества
        </a>

        <div className="footer__socials footer__socials--desktop">
          <a href="https://t.me/TrueTutoring" className="footer__social-link">
            <img src={TelegramIcon} alt="Telegram" />
          </a>
          <a href="https://wa.me/+79651016885" className="footer__social-link">
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>

      <ul className="footer__list">
        <li>
          <a
            href="https://cdn.prod.website-files.com/64478261f4af349e3807063b/65b3f00dfd6a5aa0bbaa62d7_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_1.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a
            href="https://cdn.prod.website-files.com/64478261f4af349e3807063b/65b3f00d9d692ed18fc43f44_%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Согласие на обработку персональных данных
          </a>
        </li>
        <li>
          <a
            href="https://cdn.prod.website-files.com/64478261f4af349e3807063b/678f64472e337fde4c2c623b_%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Публичная оферта
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Разработка
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
