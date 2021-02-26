import AddAlertIcon from "@material-ui/icons/AddAlert";
import MessageIcon from "@material-ui/icons/Message";
import PublicIcon from "@material-ui/icons/Public";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AppsIcon from "@material-ui/icons/Apps";

import "./css/dashpro.css";

const NotifiCompo = () => {
  return (
    <div className="notify__icons">
      <div className="apps__icons">
        <AppsIcon />
        <div className="d-none d-md-block">Apps</div>
        <KeyboardArrowDownIcon className="d-none d-md-block" />
      </div>
      <AddAlertIcon />
      <MessageIcon />
      <PublicIcon />
    </div>
  );
};

export default NotifiCompo;
