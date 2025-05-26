import React from "react";

const ProgramItem = ({ title, description, highlight }) => {
  return (
    <div>
      <h3 className="program__item-title">{title}</h3>
      <p className="program__item-description">{description}</p>
      {highlight && <p className="program__item-highlight">{highlight}</p>}
    </div>
  );
};

export default ProgramItem;
