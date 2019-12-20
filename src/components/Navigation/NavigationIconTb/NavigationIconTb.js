import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavigationIconTb.css";

export default function NavigationIconTb(props) {
  return (
    <FontAwesomeIcon
      className="NavigationIconTb"
      icon={faBars}
      onClick={props.clicked}
    />
  );
}
