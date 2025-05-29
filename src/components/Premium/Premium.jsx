import "./premium.scss";

import LaptopGuyImage from "../../assets/laptop-guy.webp";
import YellowBookImage from "../../assets/yellow-book.webp";
import PhoneGirlImage from "../../assets/phone-girl.webp";

const Premium = () => {
  const perks = [
    {
      title: "Комплексное обучение",
      description:
        "Программа сочетает теорию и практику, включает интерактивные задания и мини-проекты. Ученик получит базовые знания в маркетинге, финансах, предпринимательстве и праве, а также сможет определиться с направлениями для дальнейшего развития. \n Курс поможет изменить подход к решению задач, развить стратегическое мышление и уверенность в себе. Ребёнок будет развивать профессиональные компетенции, что откроет новые возможности для дальнейшего образования и карьеры.",
      image: LaptopGuyImage,
    },
    {
      title: "Оптимальная нагрузка",
      description:
        "Курс рассчитан на 60 академических часов, равномерно распределённых на лето (3 месяца). Такой формат позволяет пройти обучение без перегрузки в период каникул.",
      image: PhoneGirlImage,
    },
    {
      title: "Углублённая подготовка",
      description:
        "По завершении интенсива обучающимся предоставляется возможность продолжить занятия в формате углублённой и целенаправленной подготовки по выбранной дисциплине или профильным учебным предметам — с учётом индивидуальных интересов и целей развития.",
      image: YellowBookImage,
    },
  ];

  return (
    <>
      <div className="premium">
        <section className="premium__section" id="premium">
          <h2 className="premium__title scroll-animate">
            Премиум-курс с гарантией осознанного роста
          </h2>

          <div className="premium__content--mobile">
            {perks.map((perk, index) => (
              <div className="premium__perk " key={index}>
                <div className="premium__perk-image-wrapper scroll-animate">
                  <img
                    src={perk.image}
                    alt={perk.title}
                    className="premium__perk-image"
                  />
                  <h3 className="premium__perk-title scroll-animate">
                    {perk.title}
                  </h3>
                </div>

                {perk.description.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="premium__perk-description scroll-animate"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="premium__content--desktop">
            <div className="premium__perk scroll-animate premium__item--text1">
              <h3>{perks[0].title}</h3>
              {perks[0].description.split("\n").map((line, i) => (
                <p key={i} className="premium__perk-description">
                  {line}
                </p>
              ))}
            </div>

            <div className="premium__item--img1 scroll-animate">
              <img
                className="premium__image"
                src={perks[2].image}
                alt={perks[2].title}
              />
            </div>

            <div className="premium__item--img2 scroll-animate">
              <img
                className="premium__image premium__image--shifted"
                src={perks[1].image}
                alt={perks[1].title}
              />
            </div>

            <div className="premium__item--img3 scroll-animate">
              <img
                className="premium__image premium__image--large"
                src={perks[0].image}
                alt={perks[0].title}
              />
            </div>

            <div className="premium__perk scroll-animate premium__item--text2">
              <h3>{perks[1].title}</h3>
              {perks[1].description.split("\n").map((line, i) => (
                <p key={i} className="premium__perk-description">
                  {line}
                </p>
              ))}
            </div>

            <div className="premium__perk  scroll-animate premium__item--text3">
              <h3>{perks[2].title}</h3>
              {perks[2].description.split("\n").map((line, i) => (
                <p key={i} className="premium__perk-description">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Premium;
