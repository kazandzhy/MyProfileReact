import React, { Fragment } from "react";
import "./Title.css";

export default function Title(props) {
  return (
    <Fragment>
      <p className="Title">{props.title}</p>
    </Fragment>
  );
}
