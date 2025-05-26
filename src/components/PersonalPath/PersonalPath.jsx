import "./PersonalPath.scss";

const PersonalPath = () => {
  const steps = [
    {
      title: "Тестирование",
      description: "Первичное тестирование и обратная связь",
      icon: "lab.svg",
    },
    {
      title: "Формирование расписания",
      description:
        "Подбор преподавателя и формирование индивидуального учебного расписания",
      icon: "calendar.svg",
    },
    {
      title: "Индивидуальные занятия",
      description: "Индивидуальные занятия в онлайн формате",
      icon: "glasses.svg",
    },
    {
      title: "Постоянная обратная связь",
      description: "Обратная связь для родителей каждые 30 дней...",
      icon: "message.svg",
    },
    {
      title: "Собеседование и тестирование",
      description: "Собеседование с экспертами и сдача теста",
      icon: "test.svg",
    },
    {
      title: "Детализированные рекомендации",
      description: "Обратная связь с рекомендациями...",
      icon: "plus.svg",
    },
  ];
  return (
    <section className="path">
      <div className="path__title-wrapper">
        <h2 className="path__title">О курсе</h2>
        <img
          // src={titleunderline}
          alt="title underline"
          className="path__title-underline"
        />
      </div>
      <div className="path__list">
        {steps.map((step, index) => (
          <div className="path__item" key={index}>
            <div className="path__left">
              <div className="path__title-text">{step.title}</div>
              <div className="path__circle">{index + 1}</div>
            </div>
            <div
              className={`path__right ${
                index % 2 === 0 ? "path__right--highlighted" : ""
              }`}
            >
              <div className="path__item-title">
                <div className="path__item-top-wrapper">
                  <div className="path__circle">{index + 1}</div>
                  <img
                    src={`/assets/icons/${step.icon}`}
                    alt=""
                    className="path__icon"
                  />
                </div>

                <h3 className="path__item-title-text">{step.title}</h3>
              </div>

              <div className="path__desc">{step.description}</div>
              <img
                src={`/assets/icons/${step.icon}`}
                alt=""
                className="path__icon path__icon--desktop"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalPath;
