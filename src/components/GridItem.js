import React from "react";

const GridItem = (props) => {
  return (
    <div className="grid-item">
      <img src={props.src} className="grid-item-image" alt={props.alt} />
    </div>
  );
};

export default GridItem;
