import React, { Fragment } from "react";
import "./Description.css";

export default function Description(props) {
  const classes = [];
  if (props.fontStyle !== undefined) {
    classes.push(props.fontStyle);
  } else {
    classes.push("Description");
  }

  return (
    <Fragment>
      <div className={classes}>{props.children}</div>
    </Fragment>
  );
}
