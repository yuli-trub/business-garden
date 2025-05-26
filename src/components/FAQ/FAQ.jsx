import { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "Как записаться на курс?",
      answer:
        "Вы можете записаться на курс через форму на нашем сайте или связавшись с нами по телефону.",
    },
    {
      question: "Какие темы охватывает курс?",
      answer:
        "Курс охватывает темы маркетинга, финансов, предпринимательства и права.",
    },
    {
      question: "Какова продолжительность курса?",
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
    <section className="faq">
      <h2 className="faq__title">Премиум-курс с гарантией осознанного роста</h2>

      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            className={`faq__item ${openIndexes.includes(index) ? "open" : ""}`}
            key={index}
          >
            <button
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
            </button>
            <div className="faq__answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
