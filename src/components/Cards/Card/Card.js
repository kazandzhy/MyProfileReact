import React from "react";
//import classes from "./Card.module.css";
import "./Card.css";

export default function Card(props) {
  return (
    <div id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}
