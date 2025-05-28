import "./PersonalPath.scss";
import TitleUnderline from "../../assets/title-underline-blue.svg";
import BulbIcon from "../../assets/bulb-icon.svg";
import PlusTextIcon from "../../assets/plus-text-icon.svg";
import MessageIcon from "../../assets/message-icon.svg";
import GlassesIcon from "../../assets/glasses-icon.svg";
import QuestionIcon from "../../assets/question-text-icon.svg";
import BatteryIcon from "../../assets/battery-icon.svg";

const PersonalPath = () => {
  const steps = [
    {
      title: "Тестирование",
      description: "Первичное тестирование и обратная связь",
      icon: BulbIcon,
    },
    {
      title: "Формирование расписания",
      description:
        "Подбор преподавателя и формирование индивидуального учебного расписания",
      icon: BatteryIcon,
    },
    {
      title: "Индивидуальные занятия",
      description: "Индивидуальные занятия в онлайн формате",
      icon: GlassesIcon,
    },
    {
      title: "Постоянная обратная связь",
      description:
        "Обратная связь для родителей каждые 30 дней на основе выполнения домашних заданий и промежуточных тестирований",
      icon: MessageIcon,
    },
    {
      title: "Собеседование и тестирование",
      description:
        "Собеседование с экспертами и сдача контрольного тестирования",
      icon: QuestionIcon,
    },
    {
      title: "Детализированные рекомендации",
      description:
        "Детализированная обратная связь с рекомендациями по дальнейшей программе развития, индивидуальное предложение для последующего обучения",
      icon: PlusTextIcon,
    },
  ];

  return (
    <section className="path" id="personal-track">
      <div className="path__title-wrapper">
        <h2 className="path__title">Персональный трек</h2>
        <img
          src={TitleUnderline}
          alt="title underline"
          className="path__title-underline"
        />
      </div>
      <div className="path__list">
        {steps.map((step, index) => (
          <div className="path__item" key={index}>
            <div className="path__left">
              <h3 className="path__title-text">{step.title}</h3>
            </div>
            <div className="path__middle">
              <div
                className={`path__circle path__circle-lined path__circle--desktop ${
                  index % 2 === 0 ? "" : "path__circle--highlighted"
                }`}
              >
                {index + 1}
              </div>
            </div>
            <div
              className={`path__right ${
                index % 2 === 0 ? "path__right--highlighted" : ""
              }`}
            >
              <div className="path__item-title">
                <div className="path__item-top-wrapper">
                  <div className="path__circle">{index + 1}</div>
                  <img src={step.icon} alt="" className="path__icon" />
                </div>
              </div>
              <h3 className="path__item-title-text">{step.title}</h3>
              <div className="path__desc">{step.description}</div>
              <img
                src={step.icon}
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
