import { useState } from "react";
import "./signUpForm.scss";
import FormImage from "../../assets/form-image.jpg";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const BOT_TOKEN = "YOUR_BOT_TOKEN";
  const CHAT_ID = "YOUR_CHAT_ID";

  const validate = () => {
    if (!name.trim()) {
      setError("Введите имя");
      return false;
    }
    const phoneRegex =
      /^\+7\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    if (!phoneRegex.test(phone)) {
      setError("Введите корректный номер телефона");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `📬 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      if (res.ok) {
        setSuccess("Спасибо! Мы вам скоро перезвоним.");
        setName("");
        setPhone("");
      } else {
        setError("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (err) {
      console.error(err);
      setError("Ошибка соединения. Попробуйте позже.");
    }
  };

  return (
    <section className="form">
      <img src={FormImage} alt="Форма регистрации" className="form__image" />
      <div className="form__wrapper">
        <h2 className="form__title">О курсе</h2>
        <p className="form__description">
          Оставьте свой номер телефона и мы вам перезвоним в течение 15 минут
        </p>
        <form onSubmit={handleSubmit} className="form__form">
          <input
            type="text"
            placeholder="Имя"
            className="form__input form__input--name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            className="form__input form__input--phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit" className="form__button">
            Записаться
          </button>
        </form>
        {error && <p className="form__error">{error}</p>}
        {success && <p className="form__success">{success}</p>}
        <p className="form__disclaimer">
          Нажимая кнопку «Отправить», вы соглашаетесь с условиями{" "}
          <a
            href="https://cdn.prod.website-files.com/64478261f4af349e3807063b/65b3f00dfd6a5aa0bbaa62d7_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_1.docx"
            className="form__link"
          >
            Политики конфиденциальности
          </a>{" "}
          и{" "}
          <a
            href="https://cdn.prod.website-files.com/64478261f4af349e3807063b/678f64472e337fde4c2c623b_%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0.docx"
            className="form__link"
          >
            публичной оферты
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
