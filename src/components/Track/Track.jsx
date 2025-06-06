import "./track.scss";
import hatIcon from "../../assets/icons/hat-icon.svg";
import boardIcon from "../../assets/icons/board-icon.svg";
import cupIcon from "../../assets/icons/cup-icon.svg";
import museumIcon from "../../assets/icons/museum-icon.svg";

import trackImage from "../../assets/track-image.webp";

const Track = () => {
  const items = [
    {
      title: "Предпринимательское мышление и маркетинг",
      icon: hatIcon,
    },
    {
      title: "Основы управления проектами и лидерство",
      icon: cupIcon,
    },
    {
      title: "Интерактивные задания и проектная работа",
      icon: boardIcon,
    },
    {
      title: "Финансовая и юридическая грамотность",
      icon: museumIcon,
    },
  ];

  return (
    <section className="track">
      <h2 className="track__title scroll-animate">Что вас ждет?</h2>
      <div className="track__content">
        <ul className="track__benefits">
          {items.map(({ title, icon }, index) => (
            <li
              key={title}
              className={`track__benefit scroll-fade-up ${
                index % 2 === 0 ? "track__benefit--even" : "track__benefit--odd"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p>{title}</p>
              <img src={icon} alt={title} className="track__icon" />
            </li>
          ))}
        </ul>
        <div className="track__image-wrapper scroll-animate">
          <img src={trackImage} alt="Student" className="track__image" />
        </div>
      </div>
    </section>
  );
};

export default Track;
