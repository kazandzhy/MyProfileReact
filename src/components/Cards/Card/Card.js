import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}
