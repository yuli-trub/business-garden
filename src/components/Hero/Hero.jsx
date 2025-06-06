import "./hero.scss";
import heroImage from "../../assets/hero-img.webp";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      setTimeout(() => {
        el.classList.add("visible");
      }, 50);
    }
  }, []);

  return (
    <section className="hero fade-animate" id="hero" ref={sectionRef}>
      <div className="hero__content">
        <div className="hero__text-wrap">
          <h1 className="hero__title">
            BUSINESS
            <br />
            GARDEN
          </h1>
          <p className="hero__subtitle">
            Авторская программа от экспертов онлайн-школы TrueTutoring в сферах
            экономики, социальной психологии и права.
          </p>
        </div>
        <a href="#signup-form" className="hero__cta">
          Записаться
        </a>
      </div>
      <div className="hero__image-wrapper">
        <img
          src={heroImage}
          alt="Student"
          className="hero__image"
          // loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
