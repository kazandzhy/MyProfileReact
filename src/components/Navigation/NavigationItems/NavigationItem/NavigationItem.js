import React from "react";
import "./NavigationItem.css";

export default function NavigationItem(props) {
  return <div className={props.className}>{props.children}</div>;
}
