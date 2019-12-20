import React from "react";
import "./Link.css";

export default function Link(props) {
  return (
    <a href={props.to} className={props.color}>
      {props.children}
    </a>
  );
}
