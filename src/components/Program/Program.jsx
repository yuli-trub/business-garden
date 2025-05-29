import "./program.scss";
import leftarrow from "../../assets/icons/arrow-left.svg";
import rightarrow from "../../assets/icons/arrow-right.svg";
import { useRef, useState, useEffect } from "react";

const Program = () => {
  const scrollRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Маркетинг и реклама",
      description:
        "Позволит ребёнку понять принципы функционирования рынков и эффективные методы продвижения продуктов.",
      highlight:
        "В рамках курса будет освоен анализ спроса, выбор целевой ниши, стратегическое планирование, сегментация, позиционирование и разработка рекламных материалов.",
    },
    {
      title: "Финансовая грамотность",
      description:
        "Научит планировать личные расходы, составлять бюджет и контролировать финансовые потоки.",
      highlight:
        "Учащиеся познакомятся с основами накоплений и инвестиционных инструментов, включая акции и криптовалюты.",
    },
    {
      title: "Предпринимательское мышление",
      description:
        "Способствует формированию способности генерировать бизнес-идеи, запускать стартапы, а также анализировать рынок и конкурентов.",
      highlight:
        "Управление проектами и временем является неотъемлемой частью курса, способствующей развитию уверенности и профессиональных навыков для успешной деловой деятельности.",
    },
    {
      title: "Продакт-менеджмент",
      description:
        "Освоение процесса создания и совершенствования продукта включает разработку концепции, исследование рынка и эффективное взаимодействие с командой. ",
      highlight:
        "Навыки управления проектами, контроля сроков и качества работы имеют универсальное значение и применимы как в бизнесе, так и в иных сферах деятельности.",
    },
    {
      title: "Руководитель 2.0",
      description:
        "Формирование лидерских качеств и навыков эффективной коммуникации помогает научиться мотивировать команду и принимать решения в условиях неопределённости. ",
      highlight:
        "В программу также включены занятия по тайм-менеджменту, управлению эмоциями и стрессом, что способствует развитию уверенности и успешности личности.",
    },
    {
      title: "Юридические аспекты бизнеса",
      description:
        "Освоение правовых основ предпринимательской деятельности предусматривает изучение процессов регистрации, выбора формы собственности, налогообложения и защиты интеллектуальной собственности. ",
      highlight:
        "В программу также включены занятия по тайм-менеджменту, управлению эмоциями и стрессом, что способствует развитию уверенности и успешности личности.",
    },
  ];

  // scroll on desktop
  const scroll = (direction) => {
    const cardWidth = slideRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

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
    <div id="program">
      <section className="program">
        <div className="program__title-wrapper scroll-animate">
          <h2 className="program__title">Программа курса</h2>
          <div className="program__arrows-wrapper">
            <img
              src={leftarrow}
              alt="←"
              className="program__arrow"
              onClick={() => scroll("left")}
            />
            <img
              src={rightarrow}
              alt="→"
              className="program__arrow"
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        <div className="program__content" ref={scrollRef}>
          {items.map((item, index) => (
            <div
              className="program__slide scroll-animate"
              key={index}
              ref={index === 0 ? slideRef : null}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="program__item-title">{item.title}</h3>
              <p className="program__item-description">{item.description}</p>
              {item.highlight && (
                <p className="program__item-highlight">{item.highlight}</p>
              )}
            </div>
          ))}
        </div>
        <div className="program__dots scroll-animate">
          {items.map((_, index) => (
            <span
              key={index}
              className={`program__dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Program;
