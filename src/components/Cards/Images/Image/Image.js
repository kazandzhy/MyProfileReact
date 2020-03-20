import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = props => {
  const [imgStyleState] = useState({
    imgStyle: { width: "", position: "relative", left: 0, top: 0 }
  });

  return (
    <div className="Image">
      <picture>
        <source srcSet={props.large} media="(min-width: 664px)" />
        <source srcSet={props.medium} media="(min-width: 320px)" />
        <img
          id={props.id}
          src={props.small}
          alt={props.alt}
          style={imgStyleState.imgStyle}
        />
      </picture>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: "image name"
};

export default Image;
