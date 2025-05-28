import { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "Нужно ли иметь какие-либо предварительные знания?",
      answer:
        "Нет, курс подойдёт как новичкам, так и тем, кто уже интересуется сферой управления, финансов и современных прикладных дисциплин — мы адаптируем материал под уровень ребёнка.",
    },
    {
      question: "На кого расчитан курс?",
      answer: (
        <ul className="faq__answer-list">
          Курс рассчитан на тех, кто:
          <li className="faq__answer-list-item">
            стремится развивать предпринимательские навыки и подготовиться к
            будущей карьере в бизнесе
          </li>
          <li className="faq__answer-list-item">
            желает получить качественное образование и навыки, которые помогут
            им в будущем развивать собственные проекты или заниматься семейным
            бизнесом.
          </li>
          <li className="faq__answer-list-item">
            стремится к развитию и знаниям, с интересом изучают новые области.
          </li>
          <li className="faq__answer-list-item">
            хочет научиться управлять личными финансами, развивать ораторские
            способности, разобраться в таких понятиях, как проект, бизнес и
            командная работа.
          </li>
          <li className="faq__answer-list-item">
            ​заинтересован в теме лидерства, управлении проектами и финансовой
            грамотности
          </li>
        </ul>
      ),
    },
    {
      question: "На какой возраст рассчитан данный курс?",
      answer:
        "Этот курс разработан для детей от 11 до 17 лет. Мы также адаптируем его, исходя из знаний и навыков ребенка (их определит первичное тестирование).",
    },
    {
      question:
        "Можно ли подстроить расписание занятий под график летних поездок ребёнка?",
      answer:
        "Конечно! Расписание и длительность занятий можно адаптировать под каждого ученика индивидуально. Курс рассчитан на прохождение в летний период, что позволяет избежать перегрузок и идеально вписывается в каникулы. Мы создаём гибкий график, чтобы обучение было комфортным и не мешало отдыху или поездкам.",
    },
  ];
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq__title scroll-animate">FAQ</h2>

      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            className={`faq__item-wrapper scroll-fade-up`}
            key={index}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`faq__item ${
                openIndexes.includes(index) ? "open" : ""
              }`}
            >
              <div
                className="faq__question"
                onClick={() => toggle(index)}
                aria-expanded={openIndexes.includes(index)}
              >
                {item.question}
                <div
                  className={`faq__icon ${
                    openIndexes.includes(index) ? "open" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="faq__answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
