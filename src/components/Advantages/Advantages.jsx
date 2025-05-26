import "./advantages.scss";
import advantageImage1 from "../../assets/adv1.png";
import advantageImage2 from "../../assets/adv2.png";

import advantageImage3 from "../../assets/adv3.png";
import { useEffect, useRef, useState } from "react";

const Advantages = () => {
  const advantages = [
    {
      title: "Разработан экспертами",
      description:
        "Курс разработан экспертами онлайн-школы TrueTutoring, которые уже много лет помогают детям осваивать сложные темы в доступной и интересной форме. \n Мы знаем, как говорить с детьми на понятном им языке, как вовлечь и вдохновить, и самое главное — как выстроить обучение так, чтобы ребёнок действительно рос и развивался.",
      image: advantageImage1,
    },
    {
      title: "Премиум-курс с гарантией осознанного роста",
      description:
        "Курс охватывает темы маркетинга, финансов, предпринимательства и права.",
      image: advantageImage2,
    },
    {
      title: "Премиум-курс с гарантией осознанного роста",
      description:
        "Курс охватывает темы маркетинга, финансов, предпринимательства и права.",
      image: advantageImage3,
    },
  ];

  const scrollRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // track scroll for dot indicators
  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const cardWidth = slideRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="advantages">
      <div className="advantages__title-wrapper">
        <h2 className="advantages__title">О курсе</h2>
        <img
          // src={titleunderline}
          alt="title underline"
          className="advantages__title-underline"
        />
      </div>

      <div className="advantages__list advantages__list--desktop ">
        {advantages.map((advantage, index) => (
          <div className="advantages__item" key={index}>
            <img
              src={advantage.image}
              alt={advantage.title}
              className="advantages__image"
            />
            <h3 className="advantages__item-title">{advantage.title}</h3>
            <p className="advantages__item-description">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="advantages__list advantages__list--mobile"
        ref={scrollRef}
      >
        {advantages.map((advantage, index) => (
          <div
            className="advantages__slide"
            key={index}
            ref={index === 0 ? slideRef : null}
          >
            <div className="advantages__item" key={index}>
              <img
                src={advantage.image}
                alt={advantage.title}
                className="advantages__image"
              />
              <h3 className="advantages__item-title">{advantage.title}</h3>
              <p className="advantages__item-description">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="advantages__dots">
        {advantages.map((_, index) => (
          <span
            key={index}
            className={`advantages__dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
