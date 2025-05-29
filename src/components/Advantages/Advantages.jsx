import "./advantages.scss";
import advantageImage1 from "../../assets/adv1.webp";
import advantageImage2 from "../../assets/adv2.webp";
import advantageImage3 from "../../assets/adv3.webp";
import TitleUnderline from "../../assets/icons/title-underline-blue.svg";

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
      title: "Индивидуальный подход",
      description:
        "В основе нашей работы — индивидуальный подход. Мы не даём шаблонных решений. Каждый курс мы проектируем с учётом возраста, уровня подготовки и личных интересов ученика. \n Мы подбираем преподавателей не только по опыту и компетенциям, но и по личностному совпадению с ребёнком — чтобы занятия были в радость и приносили результат.",
      image: advantageImage2,
    },
    {
      title: "Профессиональное обучение",
      description:
        "Если вы ищете не просто очередной курс, а осмысленное, профессионально выстроенное обучение, где с ребёнком работают опытные и внимательные преподаватели, — мы предлагаем именно такой подход.  \n Наша задача — не просто дать знания, а помочь подростку раскрыться, научиться мыслить, принимать решения и с уверенностью двигаться вперёд.",
      image: advantageImage3,
    },
  ];

  const scrollRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <>
      <div id="advantages">
        <section className="advantages">
          <div className="advantages__title-wrapper scroll-animate">
            <h2 className="advantages__title">Преимущество работать с нами?</h2>
            <img
              src={TitleUnderline}
              alt="title underline"
              className="advantages__title-underline"
            />
          </div>

          <div className="advantages__list advantages__list--desktop ">
            {advantages.map((advantage, index) => (
              <div
                className="advantages__item scroll-animate"
                key={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="advantages__image"
                />
                <h3 className="advantages__item-title">{advantage.title}</h3>
                <div className="advantages__text">
                  {advantage.description.split("\n").map((line, i) => (
                    <p key={i} className="advantages__item-description">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="advantages__list advantages__list--mobile"
            ref={scrollRef}
          >
            {advantages.map((advantage, index) => (
              <div
                className="advantages__slide scroll-animate"
                key={index}
                ref={index === 0 ? slideRef : null}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="advantages__item " key={index}>
                  <img
                    src={advantage.image}
                    alt={advantage.title}
                    className="advantages__image"
                  />
                  <h3 className="advantages__item-title">{advantage.title}</h3>
                  <div className="advantages__text">
                    {advantage.description.split("\n").map((line, i) => (
                      <p key={i} className="advantages__item-description">
                        {line}
                      </p>
                    ))}
                  </div>
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
      </div>
    </>
  );
};

export default Advantages;
