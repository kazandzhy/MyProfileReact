import React, { Suspense, useState, lazy } from "react";

const Toolbar = lazy(() => import("../Navigation/Toolbar/Toolbar"));
const SideDrawer = lazy(() => import("../Navigation/SideDrawer/SideDrawer"));

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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Layout;
