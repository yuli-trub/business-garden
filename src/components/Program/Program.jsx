import "./program.scss";
import leftarrow from "../../assets/arrow-left.svg";
import rightarrow from "../../assets/arrow-right.svg";
import ProgramItem from "./ProgramItem";
import { useRef, useState, useEffect } from "react";

const Program = () => {
  const scrollRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Маркетинг и реклама",
      description: "...",
      highlight: "...",
    },
    {
      title: "Финансовая грамотность",
      description: "...",
      highlight: "...",
    },
    {
      title: "Предпринимательское мышление",
      description: "...",
      highlight: "...",
    },
    {
      title: "Продакт-менеджмент",
      description: "...",
      highlight: "...",
    },
    {
      title: "Руководитель 2.0",
      description: "...",
      highlight: "...",
    },
    {
      title: "Юридические аспекты бизнеса",
      description: "...",
      highlight: "...",
    },
  ];

  // scroll on desktop
  const scroll = (direction) => {
    const cardWidth = slideRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // track scroll for dot indicators
  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const cardWidth = slideRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="program">
      <div className="program__title-wrapper">
        <h2 className="program__title">Программа курса</h2>
        <div className="program__arrows-wrapper">
          <img
            src={leftarrow}
            alt="←"
            className="program__arrow"
            onClick={() => scroll("left")}
          />
          <img
            src={rightarrow}
            alt="→"
            className="program__arrow"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div className="program__content" ref={scrollRef}>
        {items.map((item, index) => (
          <div
            className="program__slide"
            key={index}
            ref={index === 0 ? slideRef : null}
          >
            <ProgramItem {...item} />
          </div>
        ))}
      </div>
      <div className="program__dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`program__dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Program;
