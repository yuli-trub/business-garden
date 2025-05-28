import { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "Нужно ли иметь какие-либо предварительные знания?",
      answer:
        "Вы можете записаться на курс через форму на нашем сайте или связавшись с нами по телефону.",
    },
    {
      question: "На кого расчитан курс?",
      answer:
        "Курс охватывает темы маркетинга, финансов, предпринимательства и права.",
    },
    {
      question: "На какой возраст рассчитан данный курс?",
      answer:
        "Курс рассчитан на 60 академических часов, распределённых на лето (3 месяца).",
    },
    {
      question:
        "Можно ли подстроить расписание занятий под график летних поездок ребёнка?",
      answer:
        "Курс рассчитан на 60 академических часов, распределённых на лето (3 месяца).",
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
      <h2 className="faq__title">FAQ</h2>

      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            className={`faq__item ${openIndexes.includes(index) ? "open" : ""}`}
            key={index}
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
        ))}
      </div>
    </section>
  );
};

export default FAQ;
