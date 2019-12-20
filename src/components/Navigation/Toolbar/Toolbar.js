import React, { Fragment } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationIconTb from "../NavigationIconTb/NavigationIconTb";
import "./Toolbar.css";

export default function Toolbar(props) {
  let toolbarMobile;

  if (!props.closed) {
    toolbarMobile = (
      <div className="ToolbarMobile">
        <NavigationIconTb
          clicked={props.toolbarToggleClicked}
        ></NavigationIconTb>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="ToolbarDesktop">
        <NavigationItems></NavigationItems>
      </div>
      {toolbarMobile}
    </Fragment>
  );
}
