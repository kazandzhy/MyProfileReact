import React, { Suspense, lazy } from "react";
import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationIconSd from "../NavigationIconSd/NavigationIconSd";

const Backdrop = lazy(() => import("../../Backdrop/Backdrop"));

export default function SideDrawer(props) {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <NavigationIconSd
          clicked={props.drawerToggleClicked}
        ></NavigationIconSd>
        <NavigationItems></NavigationItems>
      </div>
    </Suspense>
  );
}
