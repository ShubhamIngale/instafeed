import React from "react";
import LazyLoad from 'react-lazyload';

const GridItem = (props) => {
  return (
    <div className="grid-item">
      <LazyLoad>
        <img src={props.src} className="grid-item-image" alt={props.alt} />
      </LazyLoad>
    </div>
  );
};

export default GridItem;
