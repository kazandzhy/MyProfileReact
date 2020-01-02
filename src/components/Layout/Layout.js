import React, { useState, Fragment } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [sideDrawerState, setSideDrawerState] = useState({
    showSideDrawer: true,
    showToolbar: false
  });

  const sideDrawerToggleHandler = () => {
    setSideDrawerState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
        showToolbar: !prevState.showToolbar
      };
    });
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerState({
      showSideDrawer: false,
      showToolbar: true
    });
  };

  const sideDrawerOpenHandler = () => {
    setSideDrawerState({
      showSideDrawer: true,
      showToolbar: false
    });
  };

  return (
    <Fragment>
      <Toolbar
        closed={!sideDrawerState.showToolbar}
        toolbarToggleClicked={sideDrawerOpenHandler}
      />
      <SideDrawer
        open={sideDrawerState.showSideDrawer}
        closed={sideDrawerClosedHandler}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
