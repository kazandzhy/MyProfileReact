import React, { Fragment } from "react";
import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Backdrop/Backdrop";
import NavigationIconSd from "../NavigationIconSd/NavigationIconSd";

export default function SideDrawer(props) {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <NavigationIconSd
          clicked={props.drawerToggleClicked}
        ></NavigationIconSd>
        <NavigationItems></NavigationItems>
      </div>
    </Fragment>
  );
}
