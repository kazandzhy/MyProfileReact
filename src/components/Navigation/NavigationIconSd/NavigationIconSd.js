import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavigationIconSd.css";

export default function NavigationIconSd(props) {
  return (
    <FontAwesomeIcon
      className="NavigationIconSd"
      icon={faBars}
      onClick={props.clicked}
    />
  );
}
