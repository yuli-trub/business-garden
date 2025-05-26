import "./hero.scss";
import heroImage from "../../assets/hero-img.svg";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          BUSINESS
          <br />
          GARDEN
        </h1>
        <p className="hero__subtitle">
          Авторская программа от экспертов онлайн-школы TrueTutoring
          <br />в сферах экономики, социальной психологии и права.
        </p>
        <a href="#contact" className="hero__cta">
          Записаться
        </a>
        <div className="hero__image-wrapper">
          <img src={heroImage} alt="Student" className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
