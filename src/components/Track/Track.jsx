import "./track.scss";
import hatIcon from "../../assets/hat-icon.svg";
import trackImage from "../../assets/track-image.svg";

const Track = () => {
  return (
    <div className="track">
      <h2 className="track__title">Персональный трек</h2>
      <div className="track__content">
        <ul className="track__benefits">
          <li>
            <p>Предпринимательское мышление и маркетинг</p>
            <img src={hatIcon} alt="Hat Icon" className="track__icon" />
          </li>
          <li>
            <p>Основы управления проектами и лидерство</p>
            <img src={hatIcon} alt="Hat Icon" className="track__icon" />
          </li>
          <li>
            <p>Интерактивные задания и проектная работа</p>
            <img src={hatIcon} alt="Hat Icon" className="track__icon" />
          </li>
          <li>
            <p>Финансовая и юридическая грамотность</p>
            <img src={hatIcon} alt="Hat Icon" className="track__icon" />
          </li>
        </ul>
        <div className="track__image-wrapper track__image-wrapper--mobile">
          <img src={trackImage} alt="Student" className="track__image" />
        </div>
      </div>
    </div>
  );
};

export default Track;
