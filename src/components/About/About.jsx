import "./about.scss";
import aboutImage from "../../assets/about-img.jpg";
import titleunderline from "../../assets/title-underline.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <section className="about__wrapper">
        <div className="about__title-wrapper">
          <h2 className="about__title">О курсе</h2>
          <img
            src={titleunderline}
            alt="title underline"
            className="about__title-underline"
          />
        </div>
        <div className="about__content">
          <div className="about__image-wrapper about__image-wrapper--desktop">
            <img src={aboutImage} alt="Student" className="about__image" />
          </div>
          <div className="about__text">
            <div className="info-block">
              <h3 className="info-block__title">Развитие прикладных навыков</h3>
              <p className="info-block__description">
                Курс подойдет тем, кто хочет развить прикладные навыки в
                бизнесе, управлении, коммуникации и мышлении — от маркетинга до
                личной эффективности.{" "}
              </p>
            </div>
            <div className="info-block">
              <h3 className="info-block__title">Интенсив на 3 месяца</h3>
              <p className="info-block__description">
                За 3 месяца ученики освоят ключевые дисциплины и научатся
                применять знания на практике.
                <br></br>
                <br></br>
                По завершении дети освоят теорию и научатся решать реальные
                бизнес-задачи.
              </p>
            </div>
            <div className="about__image-wrapper about__image-wrapper--mobile">
              <img src={aboutImage} alt="Student" className="about__image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
