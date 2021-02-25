import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import Typography from "@material-ui/core/Typography";
import MessageIcon from "@material-ui/icons/Message";
import PublicIcon from "@material-ui/icons/Public";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./Sidebar";
import { useState } from "react";

import "./css/dashpro.css";

function AppNavbar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar position="fixed">
      <div className="dashboard">
        <Toolbar variant="dense" className="heading__logo">
          <div>
            {["left"].map((anchor) => (
              <div key={anchor}>
                <button
                  className="drawer__icon"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </button>
                <Drawer
                  className="drawerSlide"
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Sidebar />
                </Drawer>
              </div>
            ))}
          </div>

          <Typography className="logo" variant="h6" noWrap>
            Dashboard
          </Typography>
          <div className="search__bar">
            <SearchIcon />

            <InputBase
              className="input__bar"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
        <div className="notify__icons">
          <div className="apps__icons">
            <AppsIcon />
            Apps
            <KeyboardArrowDownIcon />
          </div>
          <AddAlertIcon />
          <MessageIcon />
          <PublicIcon />
        </div>
      </div>
    </AppBar>
  );
}

export default AppNavbar;
