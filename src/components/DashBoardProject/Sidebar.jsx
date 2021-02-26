import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TimelineIcon from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import ChatIcon from "@material-ui/icons/Chat";
import ContactsIcon from "@material-ui/icons/Contacts";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";

import "./css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="account__details">
        <AccountCircleIcon />
        <h6>Bilal Ahmed</h6>
        <ArrowDropDownIcon className="drop" />
      </div>

      <div className="main">
        <h6>MAIN</h6>
      </div>

      <div className="dash__sidebar">
        <div className="firstChild">
          <div className="first">
            <DashboardIcon />
            <h6>Dashboard</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="secondChild">
          <h6>Crypto</h6>
          <h6>Listing</h6>
          <h6>Crm</h6>
          <h6>Intranet</h6>
          <h6>eCommerce</h6>
          <h6>News</h6>
          <h6>Misc</h6>
        </div>
      </div>

      <div className="components">
        <div className="firstChild">
          <div className="first">
            <FolderIcon />
            <h6>Components</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <WidgetsIcon />
            <h6>Widgets</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <TimelineIcon />
            <h6>Metrics</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <br />
        <hr className="hori"></hr>
        <br />
      </div>

      <div className="components">
        <h6>IN-Build APPS</h6>
        <div className="firstChild">
          <div className="first">
            <MailIcon />
            <h6>Mail</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ListIcon />
            <h6>To-Do</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ContactsIcon />
            <h6>Contact</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ChatIcon />
            <h6>Chat</h6>
          </div>
        </div>

        <br />
        <hr className="hori"></hr>
        <br />
      </div>

      <div className="components">
        <h6>SOCIAL APPS</h6>
        <div className="firstChild">
          <div className="first">
            <PersonIcon />
            <h6>Profile</h6>
          </div>
        </div>

        <hr className="hori"></hr>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
